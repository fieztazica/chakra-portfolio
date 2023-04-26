import { Box, Text } from '@chakra-ui/react'
import SectionHeading from './SectionHeading'

function Section({ title, children, ...props }) {
    return (
        <Box mb={8} {...props}>
            <SectionHeading mb={4}>
                <Text as="b" fontSize={'xl'}>
                    {title}
                </Text>
            </SectionHeading>
            {children}
        </Box>
    )
}

export default Section
