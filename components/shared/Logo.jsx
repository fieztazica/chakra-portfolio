import { Avatar, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

function Logo({ children, ...props }) {
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Avatar
                    src={'fiezt.svg'}
                    filter={useColorModeValue('invert(100%)')}
                    transition="transform .2s"
                    _hover={{
                        textDecoration: 'none',
                        transform: 'scale(1.2)',
                    }}
                    {...props}
                >
                    {children}
                </Avatar>
            </motion.div>
        </AnimatePresence>
    )
}

export default Logo
