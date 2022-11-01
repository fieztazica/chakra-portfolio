import {
  Box,
  Flex,
  HStack,
  Text,
  Tag,
  Stack,
  AspectRatio,
  Image,
  useColorModeValue,
  Wrap,
  List,
  ListItem,
} from "@chakra-ui/react";

function InfoCard(props) {
  const lightVariant = useColorModeValue("outline");
  return (
    <Flex
      w="full"
      mx="auto"
      bg={useColorModeValue("gray.100", "gray.900")}
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
        w={1 / 4}
        bgSize="cover"
        style={{
          backgroundImage: `url(${props.logo})`,
          backgroundPosition: "center",
        }}
      ></Box>
      <Box
        w={"full"}
        p={{
          base: 4,
          md: 4,
        }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{
              color: "white",
            }}
            noOfLines={[1, 2, 3]}
          >
            {props.title}
          </Text>
          <Text minW={"max-content"} color="gray.500" fontSize={"xs"}>
            {props.period}
          </Text>
        </Flex>
        <Text
          mt={2}
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
          noOfLines={[1, 2, 3]}
        >
          {props.role}
        </Text>
        <List as={Wrap} mt={3}>
          {props.skills.map((skill, i) => (
            <ListItem key={i}>
              <Tag
                size={"sm"}
                colorScheme={"cyan"}
                maxW={"max-content"}
                variant={lightVariant}
              >
                <Text noOfLines={1}>{skill}</Text>
              </Tag>
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
}

export default InfoCard;
