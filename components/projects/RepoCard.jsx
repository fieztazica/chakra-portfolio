import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Link,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  StackDivider,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import moment from "moment/moment";
import numeral from "numeral";
import { TbStar, TbGitFork, TbFile, TbLicense } from "react-icons/tb";

function RepoCard({ data, ...props }) {
  function stringToHex(string) {
    return string
      .split("")
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");
  }
  return (
    <Flex
      w="full"
      mx="auto"
      bg={useColorModeValue("gray.100", "gray.900")}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      // transition="transform .2s"
      transitionDuration={".2s"}
      _hover={{
        transform: "translateX(5px)",
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
          <Stack
            spacing={2}
            mr={2}
            direction={["column", "row"]}
            alignItems={["left", "center"]}
          >
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
            <Tag
              size={"sm"}
              w={"max-content"}
              h={"10px"}
              variant={useColorModeValue("outline")}
            >
              {`${data.visibility}`.toUpperCase()}
            </Tag>
          </Stack>
          <Stack
            ml={2}
            minW={"max-content"}
            divider={<StackDivider />}
            fontSize={"xs"}
            color="gray.500"
            direction={["column", "row"]}
          >
            {data.stargazers_count && (
              <HStack>
                <TbStar />
                <Text>{`${data.stargazers_count}`}</Text>
              </HStack>
            )}
            {data.forks_count && (
              <HStack>
                <TbGitFork />
                <Text>{`${data.forks_count}`}</Text>
              </HStack>
            )}
            {data.size && (
              <HStack>
                <TbFile />
                <Text>{`${numeral(data.size * 1024).format("0.0b")}`}</Text>
              </HStack>
            )}
          </Stack>
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
          <List as={Wrap} mt={3}>
            {data.topics.map((topic, i) => (
              <ListItem key={i}>
                <Tag size={"sm"} colorScheme={"cyan"}>
                  <Text noOfLines={1}>{topic}</Text>
                </Tag>
              </ListItem>
            ))}
          </List>
        )}
        <HStack
          divider={<StackDivider />}
          spacing={2}
          alignItems={"center"}
          mt={2}
          color={"gray.500"}
        >
          {data.language && (
            <HStack>
              <Circle
                size={["10px", "16px"]}
                bg={`#${stringToHex(`${data.language}`).substring(0, 6)}`}
              />
              <Text
                noOfLines={1}
                maxW={["12", "full"]}
              >{`${data.language}`}</Text>
            </HStack>
          )}
          {data.license && (
            <HStack>
              <TbLicense w={["10px", "16px"]} />
              <Text
                noOfLines={1}
                maxW={["12", "full"]}
              >{`${data.license.name}`}</Text>
            </HStack>
          )}
          <Text noOfLines={1}>{`${moment(data.updated_at).fromNow()}`}</Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default RepoCard;
