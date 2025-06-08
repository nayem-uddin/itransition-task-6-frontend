import { SocketProvider, socket } from "./socket";

export default function Context({ children }) {
  return (
    <SocketProvider.Provider value={socket}>{children}</SocketProvider.Provider>
  );
}
