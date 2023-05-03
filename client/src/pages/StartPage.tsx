import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

function StartPage() {
  return (
    <Flex>
      <Box
        boxSize="sm"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="src/assets/CHATROPOLIS.svg" />
        <Image src="src/assets/logoWithStamp.png" />
        <Text>Enter nickname</Text>
        <Input placeholder="Nickname" variant="flushed" width="auto"></Input>
        <Button>Let's Chat!</Button>
      </Box>
    </Flex>
  );
}

export default StartPage;
