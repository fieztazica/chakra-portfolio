import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";
import SectionHeading from "../components/shared/SectionHeading";
import CoreTeam from "../components/team/CoreTeam";
import { getCoreTeam } from "../lib/discord";

function Team({ team }) {
  return (
    <PageLayout title={"Team"} description={"My Working Team."}>
      <Container minW="100%" maxW="2xl">
        <CoreTeam team={team} />
      </Container>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const team = await getCoreTeam();

  return { props: { team } };
}

export default Team;
