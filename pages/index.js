import { Box, Container } from "@chakra-ui/react";
import Hero from "../components/home/Hero";
import Paragraph from "../components/home/Paragraph";
import PageLayout from "../components/layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout title={"Fiezt"} description={"Fiezt says Hi!"} isAlone>
      <Container minW="100%" maxW="2xl">
        <Hero />
      </Container>
    </PageLayout>
  );
}
