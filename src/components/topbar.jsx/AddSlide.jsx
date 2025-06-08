import { FileEarmarkEasel } from "react-bootstrap-icons";

export default function AddSlide({ addSlide }) {
  return (
    <div className="ms-2 mt-3">
      <button className="btn btn-light" onClick={addSlide}>
        <FileEarmarkEasel className="menu" /> <br />
        Add new slide
      </button>
    </div>
  );
}
