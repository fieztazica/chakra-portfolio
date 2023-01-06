import { Box, Container, Text } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";
import Section from "../components/shared/Section";
import Bio from "../components/about/Bio";
import Milestones from "../components/about/Milestones";
import MyInstitutes from "../components/about/MyInstitutes";
import MyHobbies from "../components/about/MyHobbies";

function About() {
  return (
    <PageLayout title={"About"} description={"About me!"}>
      <Container minW="100%" maxW="2xl">
        <Section title={"Bio"}>
          <Bio />
        </Section>
        <Section title={"Milestones"}>
          <Milestones />
        </Section>
        <Section title={"Institutes"}>
          <MyInstitutes />
        </Section>
        <Section title={"Hobbies"}>
          <MyHobbies />
        </Section>
      </Container>
    </PageLayout>
  );
}

export default About;
