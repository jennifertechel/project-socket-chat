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
  joinRoom: (room: string) => void;
  room?: string;
}

const SocketContext = createContext<ContextValues>(null as any);
export const useSocket = () => useContext(SocketContext);

function SocketProvider({ children }: PropsWithChildren) {
  const [nickname, setNickname] = useState<string>("");
  const [room, setRoom] = useState<string>();

  const [socket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>(
    io()
  );

  const joinRoom = (room: string) => {
    socket.emit("join", room, () => {
      setRoom(room);
    });
  };

  const handleSetNickname = () => {
    socket.emit("nickname", nickname);
  };

  useEffect(() => {
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

    function rooms(rooms: string[]) {
      console.log(rooms);
    }

    socket.on("connect", connect);
    socket.on("disconnect", disconnect);
    socket.on("message", message);
    socket.on("rooms", rooms);

    return () => {
      socket.off("connect", connect);
      socket.off("disconnect", connect);
      socket.off("message", connect);
      socket.off("rooms", rooms);
    };
  }, [socket]);

  return (
    <SocketContext.Provider
      value={{ nickname, setNickname, handleSetNickname, joinRoom }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
