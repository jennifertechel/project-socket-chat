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
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  handleSetNickname: () => void;
  joinRoom: (room: string) => void;
  room?: string;
  sendMessage: (message: string) => void;
  messages: Message[];
  rooms: string[];
  typingUsers: string[];
}

const SocketContext = createContext<ContextValues>(null as any);
export const useSocket = () => useContext(SocketContext);

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

function SocketProvider({ children }: PropsWithChildren) {
  const [nickname, setNickname] = useState<string>("");
  const [room, setRoom] = useState<string>();
  const [rooms, setRooms] = useState<string[]>([]); // Initialize 'rooms' state
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

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
      setRooms(rooms);
    }

    function typing(nickname: string) {
      setTypingUsers((typingUsers) => [...typingUsers, nickname]);
    }

    function stopTyping(nickname: string) {
      setTypingUsers((typingUsers) =>
        typingUsers.filter((user) => user !== nickname)
      );
    }

    socket.on("connect", connect);
    socket.on("disconnect", disconnect);
    socket.on("message", message);
    socket.on("rooms", updateRooms);
    socket.on("rooms", updateRooms);
    socket.on("startTyping", typing);
    socket.on("stopTyping", stopTyping);

    return () => {
      socket.off("connect", connect);
      socket.off("disconnect", disconnect);
      socket.off("message", message);
      socket.off("rooms", updateRooms);
      socket.on("startTyping", typing);
      socket.on("stopTyping", stopTyping);
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
        typingUsers,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
