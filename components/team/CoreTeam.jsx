import {
    Box,
    Button,
    Fade,
    HStack,
    Skeleton,
    Spinner,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { Autoplay, Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import UserCard from '../../components/team/UserCard'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import SectionHeading from '../../components/shared/SectionHeading'
import ScrollBox from '../../components/shared/ScrollBox'
import { team as DataTeam } from '../../data/team/index'

function CoreTeam({ team }) {
    const renderTeam = () =>
        team.map((member) => {
            const dataMember = DataTeam.find(
                (DataMember) => DataMember.discordId === member.user.id
            )
            return (
                <UserCard
                    key={member.user.id}
                    fullName={dataMember?.name}
                    description={`${dataMember?.quote}`}
                    userName={`${member.user.username}#${member.user.discriminator}`}
                    email={dataMember?.email}
                    tags={dataMember?.tags}
                    avatarSrc={`https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png?size=256`}
                    action={dataMember?.action}
                    mt={2}
                    mb={2}
                />
            )
        })

    return (
        <>
            <SectionHeading mb={4}>
                <HStack>
                    <Text as="b" fontSize={'xl'}>
                        Core Team
                    </Text>
                </HStack>
            </SectionHeading>
            <Box width={'100%'} mb={10} rounded="md" height="md">
                <>
                    <ScrollBox
                        display={{ base: 'none', md: 'block' }}
                        pr={2}
                        rounded="md"
                    >
                        {renderTeam()}
                    </ScrollBox>
                    <Box
                        as={Swiper}
                        display={{ md: 'none' }}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Mousewheel]}
                        loop={true}
                        grabCursor={true}
                        loopFillGroupWithBlank={true}
                    >
                        {renderTeam().map((v, i) => (
                            <SwiperSlide key={i}>{v}</SwiperSlide>
                        ))}
                    </Box>
                </>
            </Box>
        </>
    )
}

export default CoreTeam
