import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
// responsivitet i theme?
function StartPage() {
  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        boxSize={boxSize}
        mt="100px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="src/assets/CHATROPOLIS.svg" />
        <Image src="src/assets/logoWithStamp.png" />
        <Text m="30px">Enter nickname</Text>
        <Input
          placeholder="Nickname"
          variant="flushed"
          width="auto"
          textAlign="center"
        ></Input>
        <Button>Let's Chat!</Button>
      </Box>
    </Flex>
  );
}

export default StartPage;
