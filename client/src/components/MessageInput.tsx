import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Form } from "react-router-dom";
import { useSocket } from "../context/SocketContext";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage, socket } = useSocket();
  const timerRef = useRef<NodeJS.Timeout>();
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== "") {
      sendMessage(message);
      setMessage("");
    }
  };

  const handleTyping = () => {
    if (!isTyping) {
      setIsTyping(true);
      socket.emit("typing", true);
    }

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsTyping(false);
      socket.emit("typing", false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    handleTyping();
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
              onChange={handleInputChange}
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
