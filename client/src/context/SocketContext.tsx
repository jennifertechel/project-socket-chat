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
  ServerToClientEvents,
} from "../../../server/src/communication";

interface ContextValues {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  handleSetNickname: () => void;
}

const SocketContext = createContext<ContextValues>(null as any);
export const useSocket = () => useContext(SocketContext);

function SocketProvider({ children }: PropsWithChildren) {
  const [nickname, setNickname] = useState<string>("");

  const [socket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>(
    io()
  );
  const handleSetNickname = () => {
    socket.emit("nickname", nickname);
    // Additional logic for starting chat if needed
  };

  useEffect(() => {
    // Get the nickname from the server-side and set it in the state
    socket.on("nickname", (nickname: string) => {
      setNickname(nickname);
    });

    return () => {
      socket.off("nickname");
    };
  }, [socket, setNickname]);

  useEffect(() => {
    function connect() {
      console.log("Connected to server");
    }
    function disconnect() {
      console.log("Disconnected to server");
    }
    function message() {
      console.log(message);
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
      value={{ nickname, setNickname, handleSetNickname }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
