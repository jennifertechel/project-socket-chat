import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function MessageInput() {
  return (
    <>
      <Flex align="center">
        <Box w="285px" ml="0.5rem" mt="1rem" border="1px">
          <Form id="messageInput">
            <FormControl>
              <Input
                type="text"
                fontSize="0.8rem"
                placeholder="Write a message"
              />
            </FormControl>
          </Form>
        </Box>
        <Box ml="0.4rem">
          <Button
            mt="1rem"
            type="submit"
            form="messageInput"
            fontSize="0.7rem"
            size="sm"
          >
            Send
          </Button>
        </Box>
      </Flex>
    </>
  );
}
