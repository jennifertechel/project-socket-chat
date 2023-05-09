import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketContext";
import LogoBox from "../components/LogoBox";
import Header from "../components/Header";

function StartPage() {
  const { handleSetNickname, setNickname, nickname } = useSocket();
  const navigate = useNavigate();

  function handleSubmit() {
    handleSetNickname();
    navigate("/home");
  }

  function handleNicknameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNickname(event.target.value);
  }

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      flexDir='column'
      alignItems='center'
      minH='100vh'
      justifyContent={{ base: "center", md: "normal" }}
      pt={{ base: 0, md: 40 }}
    >
      {!isMobile && <Header />}
      {isMobile && <LogoBox />}

      <Text m='30px'>Enter nickname</Text>
      <Input
        placeholder='Nickname'
        value={nickname}
        onChange={handleNicknameChange}
        variant='flushed'
        width='auto'
        textAlign='center'
      ></Input>
      <Button mt='20px' onClick={handleSubmit}>
        Let's Chat!
      </Button>

      {!isMobile && <Header />}
      {!isMobile && (
        <Image src='/assets/city.svg' pos='absolute' bottom={0} right={0} />
      )}
    </Flex>
  );
}

export default StartPage;
