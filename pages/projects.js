import { Box, Container, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";

function Projects() {
  return (
    <PageLayout title={"Projects"}  description={"My Projects."}>
      <Container minW="100%" maxW="2xl" centerContent>
        <Heading mb={5}>My Projects</Heading>
      </Container>
    </PageLayout>
  );
}

export default Projects;
