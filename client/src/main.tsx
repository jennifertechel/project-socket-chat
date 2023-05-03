import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { io, Socket } from "socket.io-client";
import SocketProvider from "./context/SocketContext";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "../../server/src/communication";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import RoomHomePage from "./pages/RoomHomePage";
import PrivateHomePage from "./pages/PrivateHomePage";
import RoomNewPage from "./pages/RoomNewPage";
import RoomChat from "./pages/RoomChat";
import PrivateNewPage from "./pages/PrivateNewPage";
import PrivateChat from "./pages/PrivateChat";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<StartPage />} />
      <Route path='home' element={<HomePage />} />
      <Route path='room' element={<RoomHomePage />} />
      <Route path='room/new' element={<RoomNewPage />} />
      <Route path='room/chat' element={<RoomChat />} />
      <Route path='private' element={<PrivateHomePage />} />
      <Route path='private/new' element={<PrivateNewPage />} />
      <Route path='private/chat' element={<PrivateChat />} />
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
