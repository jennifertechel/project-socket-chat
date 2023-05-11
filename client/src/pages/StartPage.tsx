import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Text,
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
      justifyContent='center'
      alignItems='center'
      w={{ base: "95%", md: "50%" }}
      mt={{ base: 0, md: -36 }}
    >
      {isMobile && <LogoBox />}

      <Text mb={2}>Enter a nickname</Text>
      <Input
        placeholder='Nickname'
        value={nickname}
        onChange={handleNicknameChange}
        variant='flushed'
        width='auto'
        textAlign='center'
      ></Input>
      <Button
        mt='20px'
        bg='none'
        border='solid 1px'
        borderRadius='none'
        borderColor='brand.800'
        color='brand.800'
        fontWeight='medium'
        fontSize='smaller'
        onClick={handleSubmit}
        _hover={{ bg: "brand.200", borderColor: "brand.200" }}
      >
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
