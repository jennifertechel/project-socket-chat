import { Flex, useMediaQuery } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return <Outlet />;
}

export default App;
