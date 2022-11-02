import { Container } from "@chakra-ui/react";
import PageLayout from "../../components/layouts/PageLayout";
import MyInstitutes from "../../components/about/MyInstitutes";

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
