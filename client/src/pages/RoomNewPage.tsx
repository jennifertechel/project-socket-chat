import {
  Flex,
  Input,
  Button,
  Heading,
  Image,
  useMediaQuery,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSocket } from "../context/SocketContext";
import { Form, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoBox from "../components/LogoBox";

function RoomNewPage() {
  const [room, setRoom] = useState("");
  const { joinRoom } = useSocket();
  const navigate = useNavigate();

  const handleSubmit = () => {
    joinRoom(room);
    navigate(`/room/${encodeURIComponent(room)}`);
  };

  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      flexDir='column'
      alignItems='center'
      minH='100vh'
      justifyContent='center'
    >
      {!isMobile && <Header />}

      {isMobile && <LogoBox />}
      <Text textAlign='center'>What do you want to name your new room?</Text>
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
        <Button mt={4} onClick={handleSubmit}>
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
