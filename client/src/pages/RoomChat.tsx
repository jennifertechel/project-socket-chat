import { Box, Image, Text } from "@chakra-ui/react";
import ChatMessage from "../components/ChatMessage";

function RoomChat() {
  return (
    <>
      <Box h="80px">
        <Image src="src/assets/CHATROPOLIS.svg" />
      </Box>

      <Box
        bg="#D14F9D"
        w="345px"
        h="50px"
        ml="0.5rem"
        border="1px"
        textAlign="center"
      >
        <Text fontFamily="Montserrat" color="white">
          Tips in Paris
        </Text>
      </Box>
      <ChatMessage />
    </>
  );
}

export default RoomChat;
