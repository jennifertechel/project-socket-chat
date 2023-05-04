import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function ChatMessage() {
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
            I'm going to Paris in June. Can anyone recommend any good hotels
            near the Eiffel Tower?
          </Text>
        </Box>
      </Flex>
      <Flex align="center">
        <Box w="285px" ml="0.5rem" mt="1rem" border="1px">
          <Form id="myForm">
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
            form="myForm"
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
