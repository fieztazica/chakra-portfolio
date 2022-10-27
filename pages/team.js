import { Container, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";
import CoreTeam from "../components/team/CoreTeam";

function Team() {
  return (
    <PageLayout title={"Team"}>
      <Container minW="100%" maxW="2xl" centerContent>
        <Heading mb={5}>
            My Team
        </Heading>
        <CoreTeam />
      </Container>
    </PageLayout>
  );
}

export default Team;
<Text>Team</Text>;
