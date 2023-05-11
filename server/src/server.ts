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

  socket.on("typing", (isTyping: boolean) => {
    const { room, nickname } = socket.data;
    if (!room || !nickname) return;
    socket.broadcast.to(room).emit("typing", isTyping, nickname);

    console.log("Server received typing event:", nickname, isTyping, room);
    //socket.broadcast.emit("typing", nickname, isTyping);
  });

  //Lägg till nickname, så att det syns vem som skrivit, fick felmeddelande när jag la till socket.data.name
  socket.on("message", (nickname: string, message: string) => {
    if (!socket.data.room) return;
    io.to(socket.data.room).emit("message", nickname, message);
    console.log(nickname, message);
  });

  socket.on("nickname", (nickname: string) => {
    // Store the nickname in the socket object's data property
    socket.data.nickname = nickname;
    console.log(`User ${nickname} logged in`);
  });

  socket.on("join", (room, ack) => {
    if (socket.data.room) {
      socket.leave(socket.data.room);
    }

    socket.join(room);
    socket.data.room = room;
    console.log(socket.rooms);
    ack();
    // When a user joins a room, send an updated list of rooms to everyone
    io.emit("rooms", getRooms());
  });

  socket.on("leave", (room) => {
    socket.leave(room);
    socket.data.room = undefined;

    io.to(room).emit("rooms", getRooms());

    // When a user leaves a room, check if the room is empty
    const roomIsEmpty = io.sockets.adapter.rooms.get(room)?.size === 0;

    if (roomIsEmpty) {
      io.sockets.adapter.rooms.delete(room);

      // Send an updated list of rooms to everyone
      io.emit("rooms", getRooms());
    }
  });

  // When a new user connects send the list of rooms
  socket.emit("rooms", getRooms());

  socket.on("disconnect", () => {
    // Get the nickname from the socket object's data property
    const nickname = socket.data.nickname;
    console.log(`User ${nickname} disconnected`);

    socket.on("leave", (room) => {
      socket.leave(room);

      // When a user leaves a room, check if the room is empty
      const roomIsEmpty = io.sockets.adapter.rooms.get(room)?.size === 0;

      if (roomIsEmpty) {
        io.sockets.adapter.rooms.delete(room);

        // Send an updated list of rooms to everyone
        io.emit("rooms", getRooms());
      }
    });
  });
});

function getRooms() {
  const { rooms } = io.sockets.adapter;
  const roomsFound: string[] = [];

  for (const [name, setOfSocketIds] of rooms) {
    // An acutal real room that we created
    if (!setOfSocketIds.has(name)) {
      roomsFound.push(name);
    }
  }

  return roomsFound;
}

io.listen(3000);
console.log("listening on port 3000");
