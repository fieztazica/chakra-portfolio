import { Box, Flex } from "@chakra-ui/react";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

function AppLayout(props) {
  return (
    <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
      <NavBar />
      <Box
        w={["90%", "85%", "80%"]}
        maxW={800}
        mx="auto"
        flex={1}
      >
        <Box mt={20} mb={20}>{props.children}</Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default AppLayout;
