import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Tag,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import React from 'react'
import { hobbies } from '../../data'

function MyHobbies() {
    return (
        <Accordion allowToggle>
            {hobbies.map((hobby, index) => {
                return (
                    <AccordionItem key={index}>
                        <AccordionButton>
                            <AccordionIcon />
                            <Box as="span" flex="1" textAlign="left" ml={2}>
                                <Text as="samp" fontSize={'lg'}>
                                    {hobby?.title}
                                </Text>
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            {hobby?.panel}
                            <Wrap mt={4}>
                                {hobby?.tags?.map((tag, index) => (
                                    <WrapItem key={index}>
                                        <Tag variant="solid" colorScheme="cyan">
                                            {tag}
                                        </Tag>
                                    </WrapItem>
                                ))}
                            </Wrap>
                        </AccordionPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}

export default MyHobbies
