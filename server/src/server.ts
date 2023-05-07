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

  //Lägg till nickname, så att det syns vem som skrivit, fick felmeddelande när jag la till socket.data.name
  socket.on('message', (message) => {
    io.emit('message', message);
    console.log(message);
  });

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

  // socket.on("start-typing", () => {
  //   // Get the nickname from the socket object's data property
  //   const nickname = socket.data.nickname;
  //   console.log(`User ${nickname} started typing`);

  //   // Emit "start-typing" event to all other clients except the one who triggered the event
  //   socket.broadcast.emit("start-typing", nickname);
  // });

  // socket.on("stop-typing", () => {
  //   // Get the nickname from the socket object's data property
  //   const nickname = socket.data.nickname;
  //   console.log(`User ${nickname} stopped typing`);

  //   // Emit "stop-typing" event to all other clients except the one who triggered the event
  //   socket.broadcast.emit("stop-typing", nickname);
  // });
});

io.listen(3000);
console.log("listening on port 3000");
