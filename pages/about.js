import { Container, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";

function About() {
  return (
    <PageLayout title={"About"} description={"About Fiezt!"}>
      <Container minW="100%" maxW="2xl" centerContent>
        <Heading mb={5}>About Me</Heading>
      </Container>
    </PageLayout>
  );
}

export default About;
