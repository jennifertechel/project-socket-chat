import { Flex, useMediaQuery } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      minH='100vh'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
    >
      {!isMobile && <Header />}
      <Outlet />
    </Flex>
  );
}

export default App;
