import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import MessageBox from "../components/MessageBox";
import MessageInput from "../components/MessageInput";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function RoomChat() {
  const { roomId } = useParams();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      w={{ base: "95%", md: "50%" }}
      mt={{ base: 0, md: -36 }}
    >
      {!isMobile && <Header />}
      <Box w='50%'>
        <Image src='/assets/city.svg' />
      </Box>
      <Box
        bg='brand.900'
        w='345px'
        h='50px'
        textAlign='center'
        lineHeight='2.8rem'
        mb='2rem'
      >
        <Text fontFamily='Montserrat' color='white'>
          Tips in {roomId}
        </Text>
      </Box>
      <MessageBox />
      <MessageInput />
    </Flex>
  );
}

export default RoomChat;
