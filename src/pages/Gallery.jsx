import { useContext, useEffect, useState } from "react";
import { SocketProvider } from "../context/socket";
import { PlusLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import DisplaySlides from "./DisplaySlides";

export default function Gallery() {
  const [presentations, setPresentations] = useState([]);
  const socket = useContext(SocketProvider);
  const navigate = useNavigate();
  useEffect(() => {
    socket.emit("request-all-presentations");
    socket.on("get-all-presentations", (data) => {
      setPresentations(data.presentations);
    });
  }, [socket]);
  function addNewPresentation() {
    navigate("/create-presentation", { relative: true });
  }
  return (
    <div>
      <DisplaySlides presentations={presentations} />
      <button
        onClick={addNewPresentation}
        className="btn btn-primary position-fixed bottom-0 end-0 translate-middle z-1"
        toggle="tooltip"
        data-bs-placement="auto"
        title="Create new presentation"
      >
        <PlusLg />
      </button>
    </div>
  );
}
