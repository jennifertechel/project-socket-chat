import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketContext";
import Header from "../components/Header";

function StartPage() {
  const { socket, nickname, setNickname } = useSocket();
  const navigate = useNavigate();

  function handleStartChat() {
    socket.emit("join", nickname);
    navigate("/home");
  }

  function handleNicknameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNickname(event.target.value);
  }

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex justifyContent='center' alignItems='center'>
      {isMobile ? (
        <Box textAlign='center' mt={48}>
          <Heading fontFamily='Luckiest Guy' color='brand.900' fontSize={38}>
            Chatropolis
          </Heading>
          <Image px={6} mt={8} src='/city.svg' />
          <Flex flexDir='column' justifyContent='center' alignItems='center'>
            <Text m='30px'>Enter your nickname to begin</Text>
            <Input
              placeholder='Nickname'
              value={nickname}
              onChange={handleNicknameChange}
              variant='flushed'
              width='auto'
              textAlign='center'
            ></Input>
            <Button mt='20px' onClick={handleStartChat}>
              Get started
            </Button>
          </Flex>
        </Box>
      ) : (
        <Flex flexDirection='column' alignItems='center' mt={36}>
          <Header />
          <Text m='30px'>Enter your nickname to begin</Text>
          <Input
            placeholder='Nickname'
            value={nickname}
            onChange={handleNicknameChange}
            variant='flushed'
            width='auto'
            textAlign='center'
          ></Input>
          <Button mt='20px' onClick={handleStartChat}>
            Get started
          </Button>
          <Image pos='fixed' bottom={0} right={0} src='/city.svg' />
        </Flex>
      )}
    </Flex>
  );
}

export default StartPage;
