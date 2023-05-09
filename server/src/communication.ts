export interface ServerToClientEvents {
  message: (nickname: string, message: string) => void;
  nickname: (nickname: string) => void;
  rooms: (rooms: string[]) => void;
  startTyping: (nickname: string) => void;
  stopTyping: (nickname: string) => void;
}

export interface ClientToServerEvents {
  message: (nickname: string, message: string) => void;
  nickname: (nickname: string) => void;
  join: (room: string, ack: () => void) => void;
  leave: (room: string) => void;
  startTyping: (nickname: string) => void;
  stopTyping: (nickname: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  nickname?: string;
}

//ska även ha name: string;
export interface Message {
  nickname: string;
  message: string;
}
