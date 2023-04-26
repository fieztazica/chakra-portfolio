import { Box, Button, ButtonGroup, Container, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import Hero from '../components/home/Hero'
import Paragraph from '../components/home/Paragraph'
import PageLayout from '../components/layouts/PageLayout'
import { sourceUrl } from '../data/constants'

export default function Home() {
    return (
        <PageLayout title={'Fiezt'} description={'Fiezt says Hi!'} isAlone>
            <Container minW="100%" maxW="2xl">
                <Hero />
                <Stack
                    align={'center'}
                    direction={['column', 'row']}
                    spacing={['2', '4']}
                >
                    <Button
                        as={NextLink}
                        href="/about"
                        width={'full'}
                        colorScheme={'cyan'}
                    >
                        More bout me!
                    </Button>
                    <Button
                        width={'full'}
                        as={'a'}
                        href={sourceUrl}
                        target="_blank"
                    >
                        This site source
                    </Button>
                </Stack>
            </Container>
        </PageLayout>
    )
}
