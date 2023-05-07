export interface ServerToClientEvents {
  message: (message: string) => void;
}

export interface ClientToServerEvents {
  message: (message: string) => void;
  join: (room: string) => void;
  leave: (room: string) => void;
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
