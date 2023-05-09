import { Box, Text } from "@chakra-ui/react";
import RoomBox from "./RoomBox";
import { useSocket } from "../context/SocketContext";

function ActiveRooms() {
  const { joinRoom, rooms } = useSocket();

  return (
    <Box w='90%' mt={6}>
      <Box
        background='#B6CE9E'
        py={2}
        alignItems='center'
        justifyContent='center'
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
