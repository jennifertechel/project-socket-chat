import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";

function HomePage() {
  const { socket, nickname, setNickname } = useSocket();

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

        <Heading m="30px">Welcome {nickname}!</Heading>
        <Text>Write something here and a little description</Text>
      </Box>
    </Flex>
  );
}

export default HomePage;
