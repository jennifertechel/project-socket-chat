import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Text,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";
import RoomBox from "./RoomBox";
import { useSocket } from "../context/SocketContext";

interface ActiveRoomsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ActiveRoomsModal({ isOpen, onClose }: ActiveRoomsModalProps) {
  const { joinRoom, rooms } = useSocket();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='md'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>Active Rooms</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {rooms.map((room) => (
            <RoomBox key={room} room={room} joinRoom={joinRoom} />
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ActiveRoomsModal;
