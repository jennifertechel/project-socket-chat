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

function RoomHomePage() {
  const { socket, nickname, setNickname } = useSocket();
  const [showJoinRoom, setShowJoinRoom] = useState(false);

  const handleJoinRoomClick = () => {
    // Toggle the value of showNewElement
    setShowJoinRoom((prevState) => !prevState);
  };

  useEffect(() => {
    // Get the nickname from the server-side and set it in the state
    socket.on("nickname", (nickname: string) => {
      setNickname(nickname);
    });

    return () => {
      socket.off("nickname");
    };
  }, [socket, setNickname]);

  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  return (
    <Flex justifyContent="center" alignItems="center" flexDir="column">
      <Box
        boxSize={boxSize}
        mt="100px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="src/assets/CHATROPOLIS.svg" />
        <Image src="src/assets/logoWithStamp.png" />

        <Text m="30px">Welcome {nickname}!</Text>
        <Flex flexDirection="row" gap="10px">
          <Button mt="20px">New Room</Button>
          <Button mt="20px" onClick={handleJoinRoomClick}>
            Join Room
          </Button>
        </Flex>
      </Box>

      {showJoinRoom && <ActiveRooms />}
    </Flex>
  );
}

export default RoomHomePage;
