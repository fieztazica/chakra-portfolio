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
} from '@chakra-ui/react'
import PageLayout from '../components/layouts/PageLayout'
import SectionHeading from '../components/shared/SectionHeading'
import Emails from '../components/connect/Emails'
import ContactForm from '../components/connect/ContactForm'
import Socials from '../components/connect/Socials'

function Connect() {
    return (
        <PageLayout title={'Contact'} description={'Reach me out!'}>
            <Container minW="100%" maxW="2xl">
                <Tabs
                    defaultIndex={1}
                    colorScheme="cyan"
                    isFitted
                    variant="enclosed"
                >
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
    )
}

export default Connect
