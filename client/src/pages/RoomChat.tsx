import { Box, Image, Text } from "@chakra-ui/react";
import MessageBox from "../components/MessageBox";
import MessageInput from "../components/MessageInput";
import { useSocket } from "../context/SocketContext";

function RoomChat() {
  const { room } = useSocket();
  return (
    <Box
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="345px" h="150px" mb="2rem">
        <Image h="150px" src="/assets/logoWithStamp.png" />
      </Box>

      <Box
        bg="#D14F9D"
        w="345px"
        h="50px"
        border="1px"
        textAlign="center"
        lineHeight="2.8rem"
        mb="2rem"
      >
        <Text fontFamily="Montserrat" color="white">
          Tips in {room}
        </Text>
      </Box>
      <MessageBox />
      <MessageInput />
    </Box>
  );
}

export default RoomChat;
