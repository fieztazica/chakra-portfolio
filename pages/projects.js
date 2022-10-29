import { Box, Container, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";
import GitHubRepo from "../components/projects/GithubRepo";

function Projects() {
  return (
    <PageLayout title={"Projects"} description={"My Projects."}>
      <Container minW="100%" maxW="2xl">
                <GitHubRepo />
      </Container>
    </PageLayout>
  );
}

export default Projects;
