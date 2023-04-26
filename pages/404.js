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

const NotFound = () => {
    return (
        <PageLayout title={'Not Found'} isAlone>
            <Container>
                <Heading as="h1">Not Found</Heading>
                <Text>The page you&apos;re looking was not found.</Text>
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

export default NotFound
