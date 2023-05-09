import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActiveRooms from "../components/ActiveRooms";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoBox from "../components/LogoBox";
import { useSocket } from "../context/SocketContext";

function RoomHomePage() {
  const { nickname } = useSocket();
  const [showRooms, setShowRooms] = useState(false);
  const navigate = useNavigate();

  const toggleShowRooms = () => {
    setShowRooms((prevState) => !prevState);
  };

  const handleNewRoom = () => {
    navigate("/room/new");
  };

  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        minH="100vh"
      >
        {!isMobile && <Header />}

        <Box
          boxSize={boxSize}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {isMobile && <LogoBox />}

          <Text m="30px" textAlign="center">
            Create a new chatroom to share your urban passions or browse
            existing rooms to join fascinating discussions about cities and
            travel.
          </Text>
          <Flex flexDirection="row" gap="10px">
            <Button mt="20px" onClick={handleNewRoom}>
              New Room
            </Button>
            <Button mt="20px" onClick={toggleShowRooms}>
              View Rooms
            </Button>
          </Flex>
          {showRooms && <ActiveRooms />}
        </Box>
      </Flex>
      {!isMobile && (
        <Image src="/assets/city.svg" pos="absolute" bottom={0} right={0} />
      )}
      {isMobile && <Footer />}
    </>
  );
}

export default RoomHomePage;
