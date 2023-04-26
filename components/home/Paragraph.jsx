import { Box, Button, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

function Paragraph() {
    return (
        <Box>
            <Button
                colorScheme="blue"
                as="a"
                href="https://github.com/fiezt1492"
                target={'_blank'}
                leftIcon={<FaGithub />}
            >
                GitHub
            </Button>
        </Box>
    )
}

export default Paragraph
