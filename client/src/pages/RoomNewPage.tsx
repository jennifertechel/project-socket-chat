import { Flex, Text, Input, Button } from "@chakra-ui/react";

function RoomNewPage() {
  return (
    <Flex>
      <Text m='30px'>Enter room title</Text>
      <Input
        placeholder='Room title'
        variant='flushed'
        width='auto'
        textAlign='center'
      ></Input>
      <Button mt='20px'>Let's chat!</Button>
    </Flex>
  );
}

export default RoomNewPage;
