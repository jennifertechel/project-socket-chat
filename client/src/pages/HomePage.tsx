import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSocket } from "../context/SocketContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex justifyContent='center' alignItems='center'>
      {isMobile ? (
        <Box textAlign='center' mt={48}>
          <Heading fontFamily='Luckiest Guy' color='brand.900' fontSize={38}>
            Chatropolis
          </Heading>
          <Image px={6} mt={8} src='/city.svg' />
          <Heading m='30px'>Welcome {nickname}!</Heading>
          <Text>Write something here and a little description</Text>
          <Footer />
        </Box>
      ) : (
        <Flex flexDirection='column' alignItems='center'>
          <Header />
          <Box mt={180}>
            <Heading m='30px'>Welcome {nickname}!</Heading>
            <Text>Write something here and a little description</Text>
            <Image pos='fixed' bottom={0} right={0} src='/city.svg' />
          </Box>
        </Flex>
      )}
    </Flex>
  );
}

export default HomePage;
