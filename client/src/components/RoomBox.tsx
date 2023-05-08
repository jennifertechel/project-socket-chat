import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface RoomBoxProps {
  room: string;
  joinRoom: (room: string) => void;
}

export default function RoomBox({ room, joinRoom }: RoomBoxProps) {
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    joinRoom(room);
    navigate(`/room/${encodeURIComponent(room)}`);
  };

  return (
    <Flex mt='10px' flexDirection='column'>
      <Box
        border='1px solid'
        borderColor='#6B6262'
        background='#f5f5f5'
        p='1px 10px'
      >
        <Flex justifyContent='space-between'>
          <Text ml='0'>{room}</Text>
          <Button onClick={handleJoinRoom}>Join room</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
