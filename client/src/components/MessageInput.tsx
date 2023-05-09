import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useSocket } from "../context/SocketContext";
import { socket } from "../main";

export default function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage, nickname } = useSocket();
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  function handleInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setIsTyping(value !== "");
    if (value !== "") {
      socket.emit("startTyping", nickname);
    } else {
      socket.emit("stopTyping", nickname);
    }
  }

  return (
    <>
      <Flex align="center">
        <Box w="285px" ml="0.5rem" border="1px">
          <Form onSubmit={handleSubmit} id="messageInput">
            <FormControl>
              <Input
                name="message"
                placeholder="Write a message"
                type="text"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  handleInput;
                }}
                fontSize="0.8rem"
              />
            </FormControl>
          </Form>
        </Box>
        <Box ml="0.4rem">
          <Button type="submit" form="messageInput" fontSize="0.7rem" size="sm">
            Send
          </Button>
        </Box>
      </Flex>
    </>
  );
}
