import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SocialButton = ({ children, label, href , ...props}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        opacity: "50%"
      }}
      {...props}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/fiezt1492",
    icon: <FaGithub />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/fiezt.1492",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fiezt.1492",
    icon: <FaInstagram />,
  },
];

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
        <Stack direction={"row"} spacing={6}>
          {socials.map((social) => {
            return (
              <SocialButton
                key={social.label}
                label={social.label}
                href={social.href}
              >
                {social.icon}
              </SocialButton>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
