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
  handleSetNickname: () => void;
  joinRoom: (room: string) => void;
  room?: string;
  sendMessage: (message: string) => void;
  messages: Message[];
  rooms: string[];
  leaveRoom: () => void;
  setRooms: React.Dispatch<React.SetStateAction<string[]>>;
  typingNicknames: string[];
  // handleTyping: (typingNickname: string, isTyping: boolean) => void;
}

const SocketContext = createContext<ContextValues>(null as any);
export const useSocket = () => useContext(SocketContext);

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

function SocketProvider({ children }: PropsWithChildren) {
  const [nickname, setNickname] = useState<string>("");
  const [room, setRoom] = useState<string>();
  const [rooms, setRooms] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingNicknames, setTypingNicknames] = useState<string[]>([]);

  const leaveRoom = () => {
    if (room !== undefined) {
      socket.emit("leave", room);
    }
    setRoom("");
  };

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

  //Lägg till room
  const sendMessage = (message: string) => {
    socket.emit("message", nickname, message);
  };

  useEffect(() => {
    function connect() {
      console.log("Connected to server");
    }
    function disconnect() {
      console.log("Disconnected to server");
    }

    function message(nickname: string, message: string) {
      console.log(nickname, message);
      setMessages((messages) => [...messages, { nickname, message }]);
    }

    function updateRooms(rooms: string[]) {
      console.log("Updated rooms:", rooms); // Log the updated room list
      setRooms(rooms);
    }

    function handleTyping(isTyping: boolean, nickname: string) {
      if (!isTyping) {
        // filter
        setTypingNicknames((prev) => prev.filter((name) => name !== nickname)); // Filter out the nickname if not typing
      } else {
        setTypingNicknames((prev) => [...prev, nickname]); // Update the typing nickname
        console.log("Adding nickname:", nickname); // Log the added nickname
      }
      console.log("typingNicknames:", typingNicknames); // Log the updated typingNicknames array
    }

    socket.on("connect", connect);
    socket.on("disconnect", disconnect);
    socket.on("message", message);
    socket.on("rooms", updateRooms);
    socket.on("typing", handleTyping);

    return () => {
      socket.off("connect", connect);
      socket.off("disconnect", disconnect);
      socket.off("message", message);
      socket.off("rooms", updateRooms);
      socket.off("typing", handleTyping);
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        nickname,
        setNickname,
        handleSetNickname,
        joinRoom,
        room,
        sendMessage,
        messages,
        rooms,
        leaveRoom,
        setRooms,
        typingNicknames,
        //handleTyping,
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
