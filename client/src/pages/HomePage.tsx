import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useSocket } from "../context/SocketContext";
import Header from "../components/Header";
import LogoBox from "../components/LogoBox";

function HomePage() {
  const { nickname } = useSocket();

  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex justifyContent='center' alignItems='center' minH='100vh'>
      {!isMobile && <Header />}

      <Box
        boxSize={boxSize}
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        {isMobile && <LogoBox />}

        <Heading m='30px'>Welcome {nickname}!</Heading>
        <Text>Write something here and a little description</Text>
      </Box>
      {isMobile && <Footer />}
      {!isMobile && (
        <Image src='/assets/city.svg' pos='absolute' bottom={0} right={0} />
      )}
    </Flex>
  );
}

export default HomePage;
