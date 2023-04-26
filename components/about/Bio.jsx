import { Box, Container, Text } from '@chakra-ui/react'
import { sourceUrl } from '../../data/constants'
import { bFetcher } from '../../lib/fetcher'
import useSWR from 'swr'

function Bio() {
    const { data, error, isLoading } = useSWR(
        'https://api.github.com/users/fiezt1492',
        bFetcher
    )

    if (error) return <Text>My full name is Hoàng Tiến Đạt.</Text>
    if (isLoading) return <Text>Loading...</Text>
    return <Text>{data?.bio}</Text>
}

export default Bio
