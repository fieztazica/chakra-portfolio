import { Box, Container, Text } from "@chakra-ui/react";
import PageLayout from "../../components/layouts/PageLayout";
import MyInstitutes from "./MyInstitutes";
import MyHobbies from "./MyHobbies";
import Section from "../../components/shared/Section";
import Bio from "./Bio";

function About() {
  return (
    <PageLayout title={"About"} description={"About me!"}>
      <Container minW="100%" maxW="2xl">
        <Section title={"Bio"}>
          <Bio />
        </Section>
        <Section title={"My Institutes"}>
          <MyInstitutes />
        </Section>
        <Section title={"My Hobbies"}>
          <MyHobbies />
        </Section>
      </Container>
    </PageLayout>
  );
}

export default About;
