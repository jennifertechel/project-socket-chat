export interface ServerToClientEvents {
  message: (nickname: string, message: string) => void;
  typing: (nickname: string, isTyping: boolean, room: string) => void;
  nickname: (nickname: string) => void;
  rooms: (rooms: string[]) => void;
  leave: () => void;
}

export interface ClientToServerEvents {
  message: (nickname: string, message: string) => void;
  nickname: (nickname: string) => void;
  join: (room: string, ack: () => void) => void;
  leave: (room: string) => void;
  typing: (nickname: string, isTyping: boolean, room: string) => void;
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
