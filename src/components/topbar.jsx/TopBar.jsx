import AddTextBox from "./AddTextBox";
import "../EditSlide.css";
import AddSlide from "./AddSlide";
import StartPresentation from "./StartPresentation";

export default function Topbar({ addTextBox, addSlide, startPresentation }) {
  return (
    <div className="topbar d-flex">
      <AddTextBox addTextBox={addTextBox} />
      <AddSlide addSlide={addSlide} />
      <StartPresentation startPresentation={startPresentation} />
    </div>
  );
}
