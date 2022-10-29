import {
  Box,
  Flex,
  HStack,
  Text,
  Tag,
  Stack,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

function InfoCard(props) {
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
        <HStack spacing={1} alignItems={"center"} mt={3}>
          {props.skills.map((skill, i) => (
            <Tag key={i} size={"sm"} colorScheme={"cyan"}>
              <Text noOfLines={[1, 2, 3]}>{skill}</Text>
            </Tag>
          ))}
        </HStack>
      </Box>
    </Flex>
  );
}

export default InfoCard;
