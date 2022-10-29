import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";
import SectionHeading from "../components/shared/SectionHeading";
import CoreTeam from "../components/team/CoreTeam";

function Team() {
  return (
    <PageLayout title={"Team"} description={"My Working Team."}>
      <Container minW="100%" maxW="2xl">
        <CoreTeam />
      </Container>
    </PageLayout>
  );
}

export default Team;
