import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { socials, techs } from "../../../data/constants";
import TechButton from "./TechButton";
import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container
        as={Stack}
        maxW={"full"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
          © 2022{" "}
          <Link as={Link} href="/">
            Fiezt
          </Link>
          . All rights reserved
        </Text>
        <Stack
          direction={"row"}
          spacing={2}
          display={{ base: "none", md: "inherit" }}
          align="center"
          color={"gray.500"}
        >
          <Text fontSize={"sm"}>Made with</Text>
          {techs.map((tech, i) => {
            return (
              <TechButton key={i} label={tech.label} href={tech.href}>
                {tech.icon}
              </TechButton>
            );
          })}
        </Stack>
        <Stack direction={"row"} spacing={6}>
          {socials.map((social, i) => {
            return (
              <SocialButton key={i} label={social.label} href={social.href}>
                {social.icon}
              </SocialButton>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
