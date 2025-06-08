import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import SideBar from "../components/sidebar/SideBar";
import SlideCanvas from "../components/SlideCanvas";
import Topbar from "../components/topbar.jsx/TopBar";
import { SocketProvider } from "../context/socket";

export default function EditMode() {
  const socket = useContext(SocketProvider);
  const { title } = useParams();
  const navigate = useNavigate();
  const [presentation, setPresentation] = useState([]);
  useEffect(() => {
    socket.emit("request-presentation", title);
    socket.on("deliver-presentation", handlePresentation);
    function handlePresentation(data) {
      setPresentation(data.presentation);
    }
  }, [socket, title]);
  const [slideNo, setSlideNo] = useState(0);
  const canvasRef = useRef(null);
  function selectSlide(index) {
    setSlideNo(index);
  }
  function updateSlide(updatedSlide) {
    socket.emit("update-slide", { title, slideNo, updatedSlide });
  }
  function addTextBox() {
    const slide = presentation[slideNo];
    const updatedSlide = {
      ...slide,
      blocks: [
        ...slide.blocks,
        {
          content: "Write with Markdown",
          x: 150,
          y: 150,
          width: 200,
          height: 100,
        },
      ],
    };
    socket.emit("update-slide", { title, slideNo, updatedSlide });
  }
  function addSlide() {
    socket.emit("add-slide", {
      title,
      presentationLength: presentation.length,
    });
    setSlideNo(presentation.length);
  }
  function startPresentation() {
    navigate(`/present`, { state: { presentation } });
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const handleWheel = (e) => {
      if (e.deltaY > 0 && slideNo < presentation.length - 1) {
        setSlideNo((prev) => prev + 1);
      } else if (e.deltaY < 0 && slideNo > 0) {
        setSlideNo((prev) => prev - 1);
      }
    };
    canvas.addEventListener("wheel", handleWheel, { passive: true });
    return () => canvas.removeEventListener("wheel", handleWheel);
  }, [slideNo, presentation.length]);
  return (
    <>
      <Topbar
        addTextBox={addTextBox}
        addSlide={addSlide}
        startPresentation={startPresentation}
      />
      <div className="d-flex edit-mode">
        <SideBar slides={presentation} selectSlide={selectSlide} />
        <SlideCanvas
          presentation={presentation}
          ref={canvasRef}
          slideNo={slideNo}
          updateSlide={updateSlide}
        />
      </div>
    </>
  );
}
