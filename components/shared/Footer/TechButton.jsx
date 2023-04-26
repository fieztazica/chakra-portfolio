import { VisuallyHidden, chakra, useColorModeValue } from '@chakra-ui/react'

const TechButton = ({ children, label, href, ...props }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={4}
            h={4}
            cursor={'pointer'}
            as={'a'}
            href={href}
            target="_blank"
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            title={label}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
                opacity: '50%',
            }}
            {...props}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default TechButton
