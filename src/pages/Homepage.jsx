import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketProvider } from "../context/socket";

export default function HomePage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const socket = useContext(SocketProvider);
  function moveAhead(e) {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      e.stopPropagation();
    }
    socket.emit("user-entry", userName);
    sessionStorage.setItem("username", userName);
    navigate("/gallery", { relative: true });
  }
  return (
    <div>
      <form onSubmit={moveAhead}>
        <fieldset className="w-25 mt-5 m-auto">
          <label htmlFor="username" className="mt-5">
            Enter a unique username (this is needed for user identification)
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="form-control mt-3"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-100 mt-2">
            Let's go
          </button>
        </fieldset>
      </form>
    </div>
  );
}
