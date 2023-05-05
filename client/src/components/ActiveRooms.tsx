import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketContext";
import RoomBox from "./RoomBox";

function ActiveRooms() {
  const { nickname } = useSocket();
  const location = useLocation();
  //const nickname = location.state.nickname;
  const navigate = useNavigate();

  function handleNewRoom() {
    //socket.emit("join", nickname);
    navigate("/room/new");
  }
  function handleJoinRoom() {
    //socket.emit("join", nickname);
    navigate("/room");
  }

  const boxSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  return (
    <Box>
      <Box
        background="#B6CE9E"
        m="10px"
        p="1px 10px"
        w="400px"
        alignItems="center"
        justifyContent="center"
        mt="20px"
      >
        <Text textAlign="center">Active Rooms</Text>
      </Box>
      <RoomBox />
      <RoomBox />
    </Box>
  );
}

export default ActiveRooms;
