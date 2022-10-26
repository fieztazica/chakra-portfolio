import { Box, Flex } from "@chakra-ui/react";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

function AppLayout(props) {
  return (
    <>
      <NavBar />
      <Box
        textAlign="center"
        fontSize="xl"
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
      >
        <Box pt={"7rem"} pb={10}>
          {props.children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default AppLayout;
