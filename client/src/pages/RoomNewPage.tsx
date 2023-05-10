import {
  Flex,
  Input,
  Button,
  Image,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSocket } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import LogoBox from "../components/LogoBox";

function RoomNewPage() {
  const [room, setRoom] = useState("");
  const { joinRoom } = useSocket();
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleSubmit = () => {
    joinRoom(room);
    navigate(`/room/${encodeURIComponent(room)}`);
  };

  return (
    <Flex
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      w={{ base: "95%", md: "50%" }}
      mt={{ base: 0, md: -36 }}
    >
      {isMobile && <LogoBox />}
      <Text my={6} textAlign='center'>
        What do you want to name your new room?
      </Text>
      <Flex flexDir='column'>
        <Input
          placeholder='Title here..'
          variant='flushed'
          width='auto'
          textAlign='center'
          name='Room'
          type='text'
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        ></Input>
        <Button
          bg='none'
          border='solid 1px'
          borderRadius='none'
          borderColor='brand.800'
          color='brand.800'
          fontWeight='medium'
          fontSize='smaller'
          _hover={{ bg: "brand.200", borderColor: "brand.200" }}
          mt={4}
          onClick={handleSubmit}
        >
          Create room
        </Button>
      </Flex>
      {isMobile && <Footer />}
      {!isMobile && (
        <Image src='/assets/city.svg' pos='absolute' bottom={0} right={0} />
      )}
    </Flex>
  );
}

export default RoomNewPage;
