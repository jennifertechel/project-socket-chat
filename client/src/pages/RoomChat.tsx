import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import MessageBox from "../components/MessageBox";
import MessageInput from "../components/MessageInput";

function RoomChat() {
  const { roomId } = useParams();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // Lägg in bakåtknapp här och ta bort den från Header.tsx och Footer.tsx
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w={{ base: "95%", md: "50%" }}
      mt={{ base: 0, md: -36 }}
    >
      {!isMobile && <Header />}
      <Box w="50%">
        <Image src="/assets/city.svg" />
      </Box>
      <Box
        bg="brand.900"
        w="345px"
        h="50px"
        textAlign="center"
        lineHeight="2.8rem"
        mb="2rem"
      >
        <Text fontFamily="Montserrat" color="white">
          Tips in {roomId}
        </Text>
      </Box>
      <MessageBox />
      <MessageInput />
      <Box p="10px">
        <Image src="/assets/arrowBack.svg" />
      </Box>
    </Flex>
  );
}

export default RoomChat;
