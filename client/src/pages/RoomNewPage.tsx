import { Flex, Input, Button, Heading, Image } from "@chakra-ui/react";

function RoomNewPage() {
  return (
    <Flex flexDir='column' justifyContent='center' alignItems='center'>
      <Image src='src/assets/CHATROPOLIS.svg' />
      <Image src='src/assets/logoWithStamp.png' />
      <Heading as='h6'>What do you want to name your new room?</Heading>
      <Input
        placeholder='Title here..'
        variant='flushed'
        width='auto'
        textAlign='center'
      ></Input>
      <Button mt={4}>Create room</Button>
    </Flex>
  );
}

export default RoomNewPage;
