import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Flex
      pos="fixed"
      bottom={0}
      w="100vw"
      justifyContent="space-evenly"
      alignItems="center"
      h={20}
      borderTop="1px solid lightgrey"
    >
      <Box>
        <Link to="/room">Room</Link>
      </Box>
      <Box>
        <Link to="/home">Home</Link>
      </Box>
    </Flex>
  );
}
