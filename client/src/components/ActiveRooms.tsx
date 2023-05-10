import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useSocket } from "../context/SocketContext";
import RoomBox from "./RoomBox";

interface ActiveRoomsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ActiveRoomsModal({ isOpen, onClose }: ActiveRoomsModalProps) {
  const { joinRoom, rooms } = useSocket();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Active Rooms</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <RoomBox key={room} room={room} joinRoom={joinRoom} />
            ))
          ) : (
            <Text textAlign="center">
              There are currently no active chat rooms to join. Why don't you
              create one and start chatting!
            </Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ActiveRoomsModal;
