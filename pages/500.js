import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
} from '@chakra-ui/react'
import PageLayout from '../components/layouts/PageLayout'

const Custom500 = () => {
    return (
        <PageLayout title={'Internal Server Error'} isAlone>
            <Container>
                <Heading as="h1">Internal Server Error</Heading>
                <Text>There is something wrong on server.</Text>
                <Divider my={6} />

                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="cyan">Return to home</Button>
                    </NextLink>
                </Box>
            </Container>
        </PageLayout>
    )
}

export default Custom500
