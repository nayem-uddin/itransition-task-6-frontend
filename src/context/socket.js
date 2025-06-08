import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io("https://itransition-task-6-backend.onrender.com/", {
  withCredentials: true,
});
export const SocketProvider = createContext(socket);
