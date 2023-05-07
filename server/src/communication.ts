export interface ServerToClientEvents {
  message: (message: string) => void;
  nickname: (nickname: string) => void;
}

export interface ClientToServerEvents {
  message: (message: string) => void;
  nickname: (nickname: string) => void;
  join: (room: string) => void;
  leave: (room: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  nickname?: string;
}
