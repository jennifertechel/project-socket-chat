import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ActiveRooms from "../components/ActiveRooms";
import { useSocket } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";

function RoomHomePage() {
  const { nickname } = useSocket();
  const [showRooms, setShowRooms] = useState(false);
  const navigate = useNavigate();

  const toggleShowRooms = () => {
    setShowRooms((prevState) => !prevState);
  };

  const handleNewRoom = () => {
    navigate("/room/new");
  };

  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  return (
    <Flex justifyContent='center' alignItems='center' flexDir='column'>
      <Box
        boxSize={boxSize}
        mt='100px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Image src='/assets/CHATROPOLIS.svg' />
        <Image src='/assets/logoWithStamp.png' />

        <Text m='30px'>Welcome {nickname}!</Text>
        <Flex flexDirection='row' gap='10px'>
          <Button mt='20px' onClick={handleNewRoom}>
            New Room
          </Button>
          <Button mt='20px' onClick={toggleShowRooms}>
            Join Room
          </Button>
        </Flex>
      </Box>

      {showRooms && <ActiveRooms />}
    </Flex>
  );
}

export default RoomHomePage;
