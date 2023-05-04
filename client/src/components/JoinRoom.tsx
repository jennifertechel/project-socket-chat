import { Box, Flex, Text } from "@chakra-ui/react";

export default function JoinRoom() {
  return (
    <Flex flexDirection="column">
      <Box
        border="1px solid"
        borderColor="#6B6262"
        background="#f5f5f5"
        m="10px"
        p="1px 10px"
        alignItems="center"
        justifyContent="center"
      >
        <Text textAlign="left">Paris</Text>
        <Text textAlign="right">5 Online</Text>
      </Box>
      <Box
        border="1px solid"
        borderColor="#6B6262"
        background="#f5f5f5"
        m="10px"
        p="1px 10px"
      >
        hej
      </Box>
    </Flex>
  );
}
