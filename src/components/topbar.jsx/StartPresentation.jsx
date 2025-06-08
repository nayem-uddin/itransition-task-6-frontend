import { FileEarmarkSlides } from "react-bootstrap-icons";

export default function StartPresentation({ startPresentation }) {
  return (
    <div className="ms-2 mt-3">
      <button
        className="btn btn-light"
        onClick={startPresentation}
        toggle="tooltip"
        placement="bottom"
        title="In presentation mode, press Ctrl+k for more options"
      >
        <FileEarmarkSlides className="menu" /> <br />
        Start presentation
      </button>
    </div>
  );
}
