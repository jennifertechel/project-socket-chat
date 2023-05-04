import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:3000");
// responsivitet i theme? change props : props

function HomePage() {
  const location = useLocation();
  const nickname = location.state.nickname;
  const navigate = useNavigate();

  function handleStartChat() {
    socket.emit("join", nickname);
    navigate("/home");
  }
  function handleNewRoom() {
    socket.emit("join", nickname);
    navigate("/room/new");
  }
  function handleJoinRoom() {
    socket.emit("join", nickname);
    navigate("/room");
  }

  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  return (
    <Flex justifyContent="center" alignItems="center">
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
          <Button mt="20px" onClick={handleNewRoom}>
            New Room
          </Button>
          <Button mt="20px" onClick={handleJoinRoom}>
            Join Room
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default HomePage;
