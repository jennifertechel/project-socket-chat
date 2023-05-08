import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useSocket } from "../context/SocketContext";

function HomePage() {
  const { nickname } = useSocket();

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

        <Heading m="30px">Welcome {nickname}!</Heading>
        <Text>Write something here and a little description</Text>
      </Box>
      <Footer />
    </Flex>
  );
}

export default HomePage;
