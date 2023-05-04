import { Box, Flex, Text } from "@chakra-ui/react";

export default function JoinRoom() {
  return (
    <Flex mt="10px" flexDirection="column">
      <Box
        border="1px solid"
        borderColor="#6B6262"
        background="#f5f5f5"
        m="10px"
        p="1px 10px"
        w="400px"
      >
        <Flex justifyContent="space-between">
          <Text ml="0">"City"</Text>
          <Text mr="10px">"Inlogged users"</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
