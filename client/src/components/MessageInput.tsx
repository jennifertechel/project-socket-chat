import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useSocket } from "../context/SocketContext";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSocket();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <>
      <Flex align='center'>
        <Box w='285px' ml='0.5rem' border='1px'>
          <Form onSubmit={handleSubmit} id='messageInput'>
            <FormControl>
              <Input
                name='message'
                placeholder='Write a message'
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fontSize='0.8rem'
              />
            </FormControl>
          </Form>
        </Box>
        <Box ml='0.4rem'>
          <Button type='submit' form='messageInput' fontSize='0.7rem' size='sm'>
            Send
          </Button>
        </Box>
      </Flex>
    </>
  );
}
