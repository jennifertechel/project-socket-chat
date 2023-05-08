import { Flex, Input, Button, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useSocket } from "../context/SocketContext";
import { useNavigate, useParams } from "react-router-dom";

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

  return (
    <Flex flexDir='column' justifyContent='center' alignItems='center' mt={20}>
      <Image src='/assets/CHATROPOLIS.svg' />
      <Image src='/assets/logoWithStamp.png' />
      <Heading as='h6'>What do you want to name your new room?</Heading>
      <form onSubmit={handleSubmit}>
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
        <Button mt={4} type='submit'>
          Create room
        </Button>
      </form>
    </Flex>
  );
}

export default RoomNewPage;
