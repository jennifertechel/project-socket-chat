import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Flex
      pos='fixed'
      top={0}
      w='100vw'
      justifyContent='space-evenly'
      alignItems='center'
      h={20}
      borderBottom='1px solid lightgrey'
      bg={"white"}
    >
      <Box>
        <Link to='/'>
          <Heading
            fontFamily='Luckiest Guy'
            color='brand.900'
            fontSize={46}
            mr='500px'
            mt={4}
          >
            Chatropolis
          </Heading>
        </Link>
      </Box>
      <Box>
        <Link to='/home'>Home</Link>
      </Box>
      <Box>
        <Link to='/room'>Room</Link>
      </Box>
    </Flex>
  );
}

export default Header;
