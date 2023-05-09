import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSocket } from "../context/SocketContext";

export default function MessageBox() {
  const [message, setMessage] = useState("");
  const { sendMessage, messages } = useSocket();

  return (
    <>
      <Flex
        bg="#F5F5F5"
        mb="1rem"
        w="345px"
        ml="0.5rem"
        align="center"
        alignItems="flex-start"
      >
        <ul style={{ listStyleType: "none" }}>
          {messages.map((message, i) => (
            <li key={i} style={{ marginBottom: "1rem" }}>
              <Flex alignItems="center">
                <Avatar bg="brand.700" />
                <Box ml="0.5rem" bg="#F5F5F5">
                  <Flex flexDirection="column">
                    <Text
                      fontFamily="Montserrat"
                      fontSize="0.8rem"
                      fontWeight="bold"
                      color="#6B6262"
                    >
                      {message.nickname}
                    </Text>
                    <Text>{message.message}</Text>
                  </Flex>
                </Box>
              </Flex>
            </li>
          ))}
        </ul>
      </Flex>

      {/* Här syns om en användare skriver eller inte */}
      <Box>{/* {isTyping && <div>{nickname} is typing...</div>} */}</Box>
    </>
  );
}
