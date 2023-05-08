export interface ServerToClientEvents {
  message: (message: string) => void;
  typing: (nickname: string) => void;
  nickname: (nickname: string) => void;
  rooms: (rooms: string[]) => void;
}

export interface ClientToServerEvents {
  message: (message: string) => void;
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

//ska även ha name: string;
export interface Message {
  message: string;
}
