import { Box, Image, Text } from "@chakra-ui/react";
import MessageBox from "../components/MessageBox";
import MessageInput from "../components/MessageInput";

function RoomChat() {
  return (
    <>
      <Box w="345px" h="150px">
        <Image h="150px" src="/assets/logoWithStamp.png" />
      </Box>

      <Box
        bg="#D14F9D"
        w="345px"
        h="50px"
        ml="0.5rem"
        border="1px"
        textAlign="center"
        lineHeight="2.8rem"
      >
        <Text fontFamily="Montserrat" color="white">
          Tips in Paris
        </Text>
      </Box>
      <MessageBox />
      <MessageInput />
    </>
  );
}

export default RoomChat;
