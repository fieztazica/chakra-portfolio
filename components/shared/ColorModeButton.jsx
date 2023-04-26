import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

function ColorModeButton(props) {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ x: 50, opacity: 0.2 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0.2 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    isRound
                    variant={useColorModeValue('solid', 'ghost')}
                    onClick={toggleColorMode}
                    aria-label={'Color Mode Toggle'}
                    {...props}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default ColorModeButton
