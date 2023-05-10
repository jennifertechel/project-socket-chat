import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSocket } from "../context/SocketContext";
import RoomBox from "./RoomBox";

interface ActiveRoomsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ActiveRoomsModal({ isOpen, onClose }: ActiveRoomsModalProps) {
  const { joinRoom, rooms } = useSocket();
  const modalSize = useBreakpointValue({
    sm: "xs",
    md: "lg",
    lg: "lg",
  });

  return (
    <Flex>
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
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
    </Flex>
  );
}

export default ActiveRoomsModal;
