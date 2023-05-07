import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSocket } from "../context/SocketContext";

export default function MessageBox() {
  const [message, setMessage] = useState("");
  const { sendMessage, messages } = useSocket();

  return (
    <>
      <Flex bg="#F5F5F5" mt="1rem" w="345px" ml="0.5rem" align="center">
        <Avatar bg="teal.500" />
        <Box bg="#F5F5F5">
          <Text
            fontFamily="Montserrat"
            fontSize="0.8rem"
            ml="0.5rem"
            mt="0.3rem"
            fontWeight="bold"
            color="#6B6262"
          >
            JennyW89
          </Text>
          <Text
            fontFamily="Montserrat"
            ml="0.5rem"
            fontSize="0.8rem"
            color="#6B6262"
          >
            <ul style={{ listStyleType: "none" }}>
              {messages.map((message, i) => (
                <li key={i}>{message.message}</li>
              ))}
            </ul>
          </Text>
        </Box>
      </Flex>
    </>
  );
}
