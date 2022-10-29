import { Container, Heading, Text } from "@chakra-ui/react";
import MyInstitutes from "../components/about/MyInstitutes";
import PageLayout from "../components/layouts/PageLayout";

function About() {
  return (
    <PageLayout title={"About"} description={"About Fiezt!"}>
      <Container minW="100%" maxW="2xl">
        <MyInstitutes />
      </Container>
    </PageLayout>
  );
}

export default About;
