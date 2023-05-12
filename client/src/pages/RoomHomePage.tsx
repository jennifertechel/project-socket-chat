import { Button, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
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
        justifyContent='center'
        alignItems='center'
        w={{ base: "95%", md: "50%" }}
        mt={{ base: 0, md: -36 }}
      >
        {isMobile && <LogoBox />}
        <Text my={6} textAlign='center'>
          Create a new chatroom to share your urban passions or browse existing
          rooms to join fascinating discussions about cities and travel.
        </Text>
        <Flex flexDirection='row' gap='10px'>
          <Button
            mt='20px'
            bg='none'
            border='solid 1px'
            borderRadius='none'
            borderColor='brand.800'
            color='brand.800'
            fontWeight='medium'
            fontSize='smaller'
            _hover={{ bg: "brand.200", borderColor: "brand.200" }}
            onClick={handleNewRoom}
          >
            New Room
          </Button>
          <Button
            mt='20px'
            bg='none'
            border='solid 1px'
            borderRadius='none'
            borderColor='brand.800'
            color='brand.800'
            fontWeight='medium'
            fontSize='smaller'
            _hover={{ bg: "brand.200", borderColor: "brand.200" }}
            onClick={() => setIsModalOpen(true)}
          >
            View Rooms
          </Button>
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
