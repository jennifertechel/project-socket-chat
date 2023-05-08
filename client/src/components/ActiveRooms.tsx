import { Box, Text } from "@chakra-ui/react";
import RoomBox from "./RoomBox";
import { useSocket } from "../context/SocketContext";

function ActiveRooms() {
  const { joinRoom, rooms } = useSocket();

  return (
    <Box w='90%'>
      <Box
        background='#B6CE9E'
        p='1px 10px'
        alignItems='center'
        justifyContent='center'
        mt='20px'
      >
        <Text textAlign='center'>Active Rooms</Text>
      </Box>
      {rooms.map((room) => (
        <RoomBox key={room} room={room} joinRoom={joinRoom} />
      ))}
    </Box>
  );
}

export default ActiveRooms;
