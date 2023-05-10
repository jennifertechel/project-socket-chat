import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { io, Socket } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../server/src/communication";
import App from "./App";
import SocketProvider from "./context/SocketContext";
import "./index.css";
import HomePage from "./pages/HomePage";
import RoomChat from "./pages/RoomChat";
import RoomHomePage from "./pages/RoomHomePage";
import RoomNewPage from "./pages/RoomNewPage";
import StartPage from "./pages/StartPage";
import theme from "./theme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="/room" element={<RoomHomePage />} />
      <Route path="room/new" element={<RoomNewPage />} />
      <Route path="room/:roomId" element={<RoomChat />} />
    </Route>
  )
);

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SocketProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </SocketProvider>
  </React.StrictMode>
);
