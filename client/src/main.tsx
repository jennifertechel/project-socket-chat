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

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SocketProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SocketProvider>
  </React.StrictMode>
);
