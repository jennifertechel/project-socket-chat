import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useSocket } from "../context/SocketContext";

export default function MessageBox() {
  const { messages } = useSocket();

  return (
    <>
      <Flex mb='1rem' w='345px' alignItems='flex-start'>
        <ul style={{ listStyleType: "none", width: "100%" }}>
          {messages.map((message, i) => (
            <li key={i}>
              <Flex alignItems='center' bg='#F5F5F5' mb={2}>
                <Box p={2} alignSelf='flex-start'>
                  <Avatar bg='brand.700' size='md' />
                </Box>
                <Box ml='0.5rem'>
                  <Flex flexDirection='column'>
                    <Text
                      fontFamily='Montserrat'
                      fontSize='0.8rem'
                      fontWeight='bold'
                      color='#6B6262'
                    >
                      {message.nickname}
                    </Text>
                    <Text fontSize='smaller'>{message.message}</Text>
                  </Flex>
                </Box>
              </Flex>
            </li>
          ))}
        </ul>
      </Flex>
    </>
  );
}
