import { Box, Image, Input } from "@chakra-ui/react";

function StartPage() {
  return (
    <Box boxSize="sm">
      <Image src="src/assets/logoWithStamp.png" />
      <Input placeholder="Nickname" variant="flushed" width="auto"></Input>
    </Box>
  );
}

export default StartPage;
