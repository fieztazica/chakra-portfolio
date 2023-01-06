import { Box, Flex, Progress, useDisclosure } from "@chakra-ui/react";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import { useEffect } from "react";
import { Router } from "next/router";

function AppLayout(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    Router.events.on("routeChangeStart", onOpen);
    Router.events.on("routeChangeComplete", onClose);
    Router.events.on("routeChangeError", onClose);

    return () => {
      Router.events.off("routeChangeStart", onOpen);
      Router.events.off("routeChangeComplete", onClose);
      Router.events.off("routeChangeError", onClose);
    };
  }, []);

  return (
    <>
      {isOpen && <Progress colorScheme="cyan" size="xs" isIndeterminate />}
      <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
        <NavBar />
        <Box w={["90%", "85%", "80%"]} maxW={800} mx="auto" flex={1}>
          <Box mt={20} mb={20}>
            {props.children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default AppLayout;
