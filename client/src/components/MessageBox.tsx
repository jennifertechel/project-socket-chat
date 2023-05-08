import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSocket } from "../context/SocketContext";

export default function MessageBox() {
  const [message, setMessage] = useState("");
  const { sendMessage, messages, nickname } = useSocket();

  return (
    <>
      <Flex
        bg='#F5F5F5'
        mt='1rem'
        w='345px'
        ml='0.5rem'
        align='center'
        alignItems='flex-start'
      >
        <Avatar bg='brand.700' />
        <Box bg='#F5F5F5'>
          <Text
            fontFamily='Montserrat'
            fontSize='0.8rem'
            ml='0.5rem'
            mt='0.3rem'
            fontWeight='bold'
            color='#6B6262'
          >
            {nickname}
          </Text>

          <ul style={{ listStyleType: "none" }}>
            {messages.map((message, i) => (
              <li key={i}>{message.message}</li>
            ))}
          </ul>
        </Box>
      </Flex>

      {/* Här syns om en användare skriver eller inte */}
      <Box>{/* {isTyping && <div>{nickname} is typing...</div>} */}</Box>
    </>
  );
}
