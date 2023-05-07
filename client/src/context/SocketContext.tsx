import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Socket, io } from "socket.io-client";
import {
  ClientToServerEvents,
  Message,
  ServerToClientEvents,
} from "../../../server/src/communication";

interface ContextValues {
  socket: Socket;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (message: string) => void;
  messages: Message[];
}

const SocketContext = createContext<ContextValues>(null as any);
export const useSocket = () => useContext(SocketContext);

function SocketProvider({ children }: PropsWithChildren) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>(
    io()
  );

  const [nickname, setNickname] = useState<string>("");

  //Lägg till room
  const sendMessage = (message: string) => {
    socket.emit("message", message);
  };

  useEffect(() => {
    function connect() {
      console.log("Connected to server");
    }
    function disconnect() {
      console.log("Disconnected to server");
    }
    function message(message: string) {
      setMessages((messages) => [...messages, { message }]);
    }

    socket.on("connect", connect);
    socket.on("disconnect", disconnect);
    socket.on("message", message);

    return () => {
      socket.off("connect", connect);
      socket.off("disconnect", connect);
      socket.off("message", connect);
    };
  }, [socket]);

  return (
    <SocketContext.Provider
      value={{ socket, nickname, setNickname, sendMessage, messages }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
