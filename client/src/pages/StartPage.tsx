import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketContext";

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

  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  return (
    <Flex justifyContent='center' alignItems='center'>
      <Box
        boxSize={boxSize}
        mt='100px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Image src='src/assets/CHATROPOLIS.svg' />
        <Image src='src/assets/logoWithStamp.png' />
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
      </Box>
    </Flex>
  );
}

export default StartPage;
