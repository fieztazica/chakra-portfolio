import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import PageLayout from "../../components/layouts/PageLayout";
import SectionHeading from "../../components/shared/SectionHeading";
import ContactForm from "./ContactForm";
import DividerWith from "../../components/shared/DividerWith";
import Emails from "./Emails";
import Socials from "./Socials";

function Connect() {
  return (
    <PageLayout title={"Contact"} description={"Reach me out!"}>
      <Container minW="100%" maxW="2xl">
        <Tabs defaultIndex={1} colorScheme="cyan" isFitted variant="enclosed">
          <TabList>
            <Tab>Emails</Tab>
            <Tab>Leave a message</Tab>
            <Tab>Socials</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Emails />
            </TabPanel>
            <TabPanel>
              <ContactForm />
            </TabPanel>
            <TabPanel>
              <Socials />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </PageLayout>
  );
}

export default Connect;
