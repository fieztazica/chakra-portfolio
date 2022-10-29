import {
  Box,
  Flex,
  HStack,
  Link,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import moment from "moment/moment";

function RepoCard({ data, ...props }) {
  return (
    <Flex
      w="full"
      mx="auto"
      bg="white"
      _dark={{
        bg: "gray.900",
      }}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="transform .2s"
      _hover={{
        transform: "translateX(10px)",
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
            {data.size}
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
        <HStack
          divider={<StackDivider />}
          spacing={2}
          alignItems={"center"}
          mt={3}
        >
          {data.language && <Text>{`${data.language}`}</Text>}
          {data.stargazers_count && <Text>{`${data.stargazers_count}`}</Text>}
          {data.forks && <Text>{`${data.forks}`}</Text>}
          {data.license && (
            <Link href={data.license.url} target="_blank">{`${
              data.license.name || ""
            }`}</Link>
          )}
          <Text>{`${moment(data.updated_at).fromNow()}`}</Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default RepoCard;
