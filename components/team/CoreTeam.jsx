import {
    Box,
    Button,
    Fade,
    HStack,
    Skeleton,
    Spinner,
    Text,
} from "@chakra-ui/react";
import React from "react";
import {Autoplay, Mousewheel, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import UserCard from "./UserCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "../shared/SectionHeading";
import ScrollBox from "../shared/ScrollBox";
import {team as DataTeam} from "../../data/team/index"

function CoreTeam() {
    const [loading, setLoading] = React.useState(false);
    const [team, setTeam] = React.useState(null);

    const fetchTeam = () => {
        setLoading(true);
        fetch("/api/discord/getteam")
            .then(async (data) => {
                const json = await data.json();
                setLoading(false);
                setTeam(json);
            })
            .catch((error) => {
                setLoading(false);
            });
    };

    const renderTeam = () => team.map((member) => {
        const dataMember = DataTeam.find((DataMember) => DataMember.discordId === member.user.id)
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
                mt={2} mb={2}
            />
        )
    })


    React.useEffect(() => {
        fetchTeam();
    }, []);

    return (
        <>
            <SectionHeading mb={4}>
                <HStack>
                    <Text as="b" fontSize={"xl"}>
                        Core Team
                    </Text>
                    <Fade in={loading}>
                        <Spinner/>
                    </Fade>
                </HStack>
            </SectionHeading>
            <Box width={"100%"} mb={10}>
                <Skeleton
                    isLoaded={!loading}
                    fadeDuration={4}
                    height={"md"}
                    rounded="md"
                >
                    {team && (
                        <>
                            <ScrollBox
                                display={{base: "none", md: "block"}}
                                pr={2}
                                rounded="md"
                            >
                                {renderTeam()}
                            </ScrollBox>
                            <Box
                                as={Swiper}
                                display={{md: "none"}}
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
                                    <SwiperSlide key={i}>
                                        {v}
                                    </SwiperSlide>
                                ))}
                            </Box>
                        </>
                    )}
                    {!team && !loading && (
                        <Button onClick={fetchTeam}>
                            Failed to fetch data. Click to retry
                        </Button>
                    )}
                </Skeleton>
            </Box>
        </>
    );
}

export default CoreTeam;
