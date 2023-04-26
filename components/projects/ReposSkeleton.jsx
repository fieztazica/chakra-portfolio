import {
    Box,
    Fade,
    Skeleton,
    SkeletonText,
    useColorModeValue,
} from '@chakra-ui/react'

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function RepoSkeleton({ ...props }) {
    return (
        <Box
            rounded={'md'}
            p={4}
            bg={useColorModeValue('gray.100', 'gray.900')}
            {...props}
        >
            <SkeletonText noOfLines={4} spacing="4" />
        </Box>
    )
}

function ReposSkeleton({ min = 1, max = 10, ...props }) {
    const random = getRandomInt(min, max)
    const array = new Array(random).fill(null)
    return array.map((v, i) => <RepoSkeleton key={i} {...props} />)
}

export default ReposSkeleton
