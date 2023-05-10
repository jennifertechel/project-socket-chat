import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useSocket } from "../context/SocketContext";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSocket();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== "") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <>
      <Flex align='center'>
        <Form onSubmit={handleSubmit} id='messageInput'>
          <FormControl>
            <Input
              name='message'
              placeholder='Write a message'
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fontSize='smaller'
              required
              border='solid 1px '
              borderRadius='none'
              borderColor='brand.800'
              w={64}
            />
          </FormControl>
        </Form>
        <Button
          type='submit'
          form='messageInput'
          bg='none'
          border='solid 1px'
          borderRadius='none'
          borderColor='brand.800'
          color='brand.800'
          fontWeight='medium'
          fontSize='smaller'
          ml={4}
          _hover={{ bg: "brand.200", borderColor: "brand.200" }}
        >
          Send
        </Button>
      </Flex>
    </>
  );
}
