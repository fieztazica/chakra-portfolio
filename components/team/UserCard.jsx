import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Heading,
  Link,
  Stack,
  Tag,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

function Description({ children }) {
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
  rank,
  email,
  ...props
}) {
  return (
    <Center py={6} {...props}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Tooltip label={`${fullName}'s Discord avatar`}>
          <Avatar
            size={"xl"}
            name={fullName}
            src={avatarSrc}
            alt={fullName}
            mb={4}
            pos={"relative"}
            //   _after={{
            //     content: '""',
            //     w: 4,
            //     h: 4,
            //     bg: "green.300",
            //     border: "2px solid white",
            //     rounded: "full",
            //     pos: "absolute",
            //     bottom: 0,
            //     right: 3,
            //   }}
          />
        </Tooltip>

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          <Tooltip label={fullName}>{fullName}</Tooltip>
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          <Tooltip label={`${fullName}'s Discord tag`}>{userName}</Tooltip>
        </Text>

        {description && <Description>{description}</Description>}

        {tags && tags.length && (
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {tags.map((tag, index) => (
              <Tag colorScheme="green" key={index}>{`${tag}`}</Tag>
            ))}
          </Stack>
        )}

        <Stack mt={8} direction={"row"} spacing={4}>
          <Tooltip label={email}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              as="a"
              href={`mailto:${email}`}
            >
              Message
            </Button>
          </Tooltip>

          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            as="a"
            href={`https://discord.io/owlvernyte`}
            target="_blank"
          >
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

export default UserCard;
