import { Box, Flex, HStack, Link, Tag, Text } from "@chakra-ui/react";
import moment from "moment/moment";

function RepoCard({ data }, ...props) {
  return (
    <Flex
      w="full"
      mx="auto"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="transform .2s"
      _hover={{
        transform: "scale(1.05)",
      }}
      {...props}
    >
      <Box
        w={"full"}
        p={{
          base: 4,
          md: 4,
        }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <HStack spacing={2}>
            <Text
              as={Link}
              href={data.html_url}
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "white",
              }}
              noOfLines={[1, 2, 3]}
              target="_blank"
            >
              {data.name}
            </Text>
            <Tag size={"sm"}>{`${data.visibility}`.toUpperCase()}</Tag>
          </HStack>
          <Text minW={"max-content"} color="gray.500" fontSize={"xs"}>
            {data.stargazers_count}
          </Text>
        </Flex>
        {data.description && (
          <Text
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
            noOfLines={[1, 2, 3]}
          >
            {data.description}
          </Text>
        )}
        {data?.topics && (
          <HStack spacing={1} alignItems={"center"} mt={3}>
            {data.topics.map((topic, i) => (
              <Tag key={i} size={"sm"} colorScheme={"cyan"}>
                <Text noOfLines={[1, 2, 3]}>{topic}</Text>
              </Tag>
            ))}
          </HStack>
        )}
        <HStack spacing={2} alignItems={"center"} mt={3}>
          <Text>{`${data.language || ""}`}</Text>
          <Text>{`${moment(data.updated_at).fromNow()}`}</Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default RepoCard;
