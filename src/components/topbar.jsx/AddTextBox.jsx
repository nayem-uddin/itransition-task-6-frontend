import { BoundingBox } from "react-bootstrap-icons";

export default function AddTextBox({ addTextBox }) {
  return (
    <div className="ms-2 mt-3">
      <button className="btn btn-light" onClick={addTextBox}>
        <BoundingBox className="menu" /> <br />
        Add text box
      </button>
    </div>
  );
}
