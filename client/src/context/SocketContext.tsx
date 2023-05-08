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
  sendMessage: (nickname: string, message: string) => void;
  messages: Message[];
}

const SocketContext = createContext<ContextValues>(null as any);
export const useSocket = () => useContext(SocketContext);

function SocketProvider({ children }: PropsWithChildren) {
  const [nickname, setNickname] = useState<string>("");
  const [room, setRoom] = useState<string>();

  // const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
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

  //Lägg till room
  const sendMessage = (nickname: string, message: string) => {
    socket.emit("message", nickname, message);
  };

  useEffect(() => {
    function connect() {
      console.log("Connected to server");
    }
    function disconnect() {
      console.log("Disconnected to server");
    }
    function message(message: string) {
      console.log(message);
      setMessages((messages) => [...messages, { message }]);
    }

    function rooms(rooms: string[]) {
      console.log(rooms);
    }

    // function startTyping() {
    //   socket.emit("start-typing", nickname);
    //   setIsTyping(true);
    // }

    // function stopTyping() {
    //   socket.emit("stop-typing", nickname);
    //   setIsTyping(false);
    // }

    // function handleStartTyping(nickname: string) {
    //   console.log(`${nickname} is typing...`);
    //   setIsTyping(true);
    // }

    // function handleStopTyping(nickname: string) {
    //   console.log(`${nickname} stopped typing.`);
    //   setIsTyping(false);
    // }

    // function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    //   const message = event.target.value;
    //   setMessage(message);
    //   if (message) {
    //     startTyping();
    //   } else {
    //     stopTyping();
    //   }
    // }

    socket.on("connect", connect);
    socket.on("disconnect", disconnect);
    socket.on("message", message);
    socket.on("rooms", rooms);
    // socket.on("start-typing", handleStartTyping);
    // socket.on("stop-typing", handleStopTyping);

    return () => {
      socket.off("connect", connect);
      socket.off("disconnect", connect);
      socket.off("message", connect);
      socket.off("rooms", rooms);
      // socket.off("start-typing", handleStartTyping);
      // socket.off("stop-typing", handleStopTyping);
    };
  }, [socket]);

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
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
