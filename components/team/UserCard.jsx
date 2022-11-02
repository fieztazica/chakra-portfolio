import {
    Avatar,
    Box,
    Button,
    Center,
    Heading,
    Stack, StackDivider,
    Tag,
    Text,
    Tooltip,
    useColorModeValue, VStack, Wrap, WrapItem,
} from "@chakra-ui/react";

function Description({children}) {
    return (
        <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
        >
            {children}
        </Text>
    );
}

function UserCard({
                      fullName,
                      userName,
                      avatarSrc,
                      description,
                      tags,
                      email,
                      action,
                      ...props
                  }) {
    const lightVariant = useColorModeValue("outline");

    return (
        <Box
            as={Stack}
            bg={useColorModeValue("gray.100", "gray.900")}
            boxShadow={"lg"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
            divider={<StackDivider display={["none", "block"]} p={2}/>}
            direction={["column", "row"]}
            {...props}
        >
            <Center
                w={{
                    base: "full",
                    md: 1 / 3
                }}
                p={2}
            >
                <Box>
                    <Tooltip label={`${fullName}'s Discord avatar`}>
                        <Avatar
                            size={{
                                base: "xl",
                                md: "2xl"
                            }}
                            name={fullName}
                            src={avatarSrc}
                            alt={fullName}
                            mb={4}
                            pos={"relative"}
                        />
                    </Tooltip>
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                        <Tooltip label={fullName}>{fullName}</Tooltip>
                    </Heading>
                    <Text fontWeight={600} color={"gray.500"}>
                        <Tooltip label={`${fullName}'s Discord tag`}>{userName}</Tooltip>
                    </Text>
                </Box>
            </Center>
            <Center
                w={{
                    base: "full",
                    md: 2 / 3
                }}
                p={2}
            >
                <VStack
                    minW={"full"}
                    align='stretch'
                    spacing={4}
                >
                    {description ? <Description>{description}</Description> : null}
                    {tags?.length ? (
                        <Wrap align={"center"} justify={"center"} direction={"row"}>
                            {tags.map((tag, index) => (
                                <WrapItem key={index}>
                                    <Tag
                                        colorScheme="green"
                                        variant={lightVariant}
                                    >{`${tag}`}</Tag>
                                </WrapItem>

                            ))}
                        </Wrap>
                    ) : null}
                    <Stack direction={{base: "column", md: "row"}} spacing={4} justifyContent={"center"}>
                        <Tooltip label={email}>
                            <Button
                                as={"a"}
                                href={`mailto:${email || "fiezt@pm.me"}`}
                                size={{base: "lg", md: "md"}}
                                variant={lightVariant}
                                flex={{md: 1}}
                            >
                                Contact
                            </Button>
                        </Tooltip>
                        {action?.label && action?.href && (
                            <Button
                                as={"a"}
                                size={{base: "lg", md: "md"}}
                                href={action?.href}
                                target="_blank"
                                colorScheme={"cyan"}
                                flex={{md: 1}}
                                leftIcon={action?.icon}
                            >
                                {action.label}
                            </Button>
                        )}
                    </Stack>
                </VStack>

            </Center>
        </Box>
    );
}

export default UserCard;
