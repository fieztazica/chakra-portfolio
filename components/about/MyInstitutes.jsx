import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { institutes } from "../../data";
import SectionHeading from "../shared/SectionHeading";
import InfoCard from "./InfoCard";

function MyInstitutes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [card, setCard] = React.useState(institutes[0]);

  const handleCardClick = (newCard) => {
    setCard(newCard);
    onOpen();
  };

  return (
    <>
      <SectionHeading mb={4}>
        <Text as="b" fontSize={"xl"}>
          My Institutes
        </Text>
      </SectionHeading>
      <Box mt={2}>
        {institutes.map((i, index) => {
          return (
            <InfoCard
              key={index}
              mt={2}
              onClick={() => handleCardClick(i)}
              {...i}
            />
          );
        })}
      </Box>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        size={["full", "md"]}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex justifyContent="space-between" alignItems="center">
              <SimpleGrid>
                <Text fontSize={"xl"}>{card?.title}</Text>
                <Text fontSize={"xs"}>{card?.period}</Text>
                <HStack spacing={1} mt={1}>
                  {card?.skills.map((skill, i) => (
                    <Tag key={i} size={"sm"} colorScheme={"cyan"}>
                      {skill}
                    </Tag>
                  ))}
                </HStack>
              </SimpleGrid>
              <Image
                boxSize="100px"
                objectFit="cover"
                src={card?.logo}
                alt={card?.alt}
                rounded="lg"
                shadow="lg"
              />
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Text>{`${card?.role}`}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MyInstitutes;
