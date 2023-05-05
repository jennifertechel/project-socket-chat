import { Server } from "socket.io";
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./communication";

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("join", (nickname: string) => {
    // Store the nickname in the socket object's data property
    socket.data.nickname = nickname;
    console.log(`User ${nickname} logged in`);
  });

  socket.on("disconnect", () => {
    // Get the nickname from the socket object's data property
    const nickname = socket.data.nickname;
    console.log(`User ${nickname} disconnected`);
  });
});

io.listen(3000);
console.log("listening on port 3000");
