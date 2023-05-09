import { Heading, Image } from "@chakra-ui/react";

function LogoBox() {
  return (
    <>
      <Heading fontFamily='Luckiest Guy' color='brand.900' fontSize={46}>
        Chatropolis
      </Heading>
      <Image src='/assets/city.svg' />
    </>
  );
}

export default LogoBox;
