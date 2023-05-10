export interface ServerToClientEvents {
  message: (nickname: string, message: string) => void;
  typing: (nickname: string) => void;
  nickname: (nickname: string) => void;
  rooms: (rooms: string[]) => void;
  leave: () => void; // Add the 'leave' event definition
}

export interface ClientToServerEvents {
  message: (nickname: string, message: string) => void;
  nickname: (nickname: string) => void;
  join: (room: string, ack: () => void) => void;
  leave: (room: string) => void;
  typing: (nickname: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  nickname?: string;
}

export interface Message {
  nickname: string;
  message: string;
}
