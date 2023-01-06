import { Box, Container, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";
import GitHubRepo from "../components/projects/GitHubRepo";

function Projects({ repos }) {
  return (
    <PageLayout title={"Projects"} description={"My Projects."}>
      <Container minW="100%" maxW="2xl">
        <GitHubRepo repos={repos} />
      </Container>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.github.com/users/fiezt1492/repos?per_page=100`
  );
  const repos = await res.json();

  if (!repos || Array.isArray(repos)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      repos,
    },
  };
}

export default Projects;
