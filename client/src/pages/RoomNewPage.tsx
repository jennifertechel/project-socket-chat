import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoBox from "../components/LogoBox";
import { useSocket } from "../context/SocketContext";

function RoomNewPage() {
  const [room, setRoom] = useState("");
  const { joinRoom } = useSocket();
  const navigate = useNavigate();
  const { roomId } = useParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinRoom(room);
    navigate(`/room/${encodeURIComponent(room)}`);
  };

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" mt={20}>
      <Box>
        <Link to="/room">
          <Image
            src="/assets/goBackButton.svg"
            boxSize={isMobile ? "50px" : "100px"}
            style={{ position: "absolute", left: 0, padding: "5px" }}
          />
        </Link>
      </Box>
      {!isMobile && <Header />}

      {isMobile && <LogoBox />}

      <Heading as="h6">What do you want to name your new room?</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Title here.."
          variant="flushed"
          width="auto"
          textAlign="center"
          name="Room"
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        ></Input>
        <Button mt={4} type="submit">
          Create room
        </Button>
      </form>
      {isMobile && <Footer />}
    </Flex>
  );
}

export default RoomNewPage;
