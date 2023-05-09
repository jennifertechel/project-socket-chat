import {
  Button,
  Center,
  Container,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoBox from "../components/LogoBox";
import ActiveRoomsModal from "../components/ActiveRooms";

function RoomHomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNewRoom = () => {
    navigate("/room/new");
  };

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Flex
        flexDir='column'
        alignItems='center'
        minH='100vh'
        justifyContent={{ base: "center", md: "normal" }}
        pt={{ base: 0, md: 40 }}
      >
        <Flex flexDir='column' alignItems='center' justifyContent='center'>
          {!isMobile && <Header />}

          {isMobile && <LogoBox />}
          <Text m='30px' textAlign='center'>
            Create a new chatroom to share your urban passions or browse
            existing rooms to join fascinating discussions about cities and
            travel.
          </Text>
          <Flex flexDirection='row' gap='10px'>
            <Button mt='20px' onClick={handleNewRoom}>
              New Room
            </Button>
            <Button mt='20px' onClick={() => setIsModalOpen(true)}>
              View Rooms
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {!isMobile && (
        <Image src='/assets/city.svg' pos='absolute' bottom={0} right={0} />
      )}
      {isMobile && <Footer />}
      <ActiveRoomsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default RoomHomePage;
