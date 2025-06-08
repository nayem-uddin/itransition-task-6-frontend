import { useContext, useState } from "react";
import { SocketProvider } from "../context/socket";
import { useNavigate } from "react-router-dom";

export default function CreatePresentation() {
  const [title, setTitle] = useState("");
  const socket = useContext(SocketProvider);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.stopPropagation();
    }
    const creationDate = new Date();
    socket.emit("add-new-presentation", {
      title,
      creationDate: `${creationDate.getFullYear()}-${
        creationDate.getMonth() + 1
      }-${creationDate.getDate()}`,
      creator: sessionStorage.getItem("username"),
    });
    navigate(`/edit/${title}`, { relative: true });
  }
  return (
    <div className="w-25 m-auto mt-5">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="title">
            Set a unique title (see the slides' list to avoid duplication)
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Start
          </button>
        </fieldset>
      </form>
    </div>
  );
}
