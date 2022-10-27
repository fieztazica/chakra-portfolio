import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Icon,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeButton from "./ColorModeButton";
import NextLink from "next/link";
import { BsPerson } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { ReactComponent as fieztLogo } from "../../public/fiezt.svg";

const Links = [
  {
    label: "About",
    href: "/about",
    icon: <BsPerson />,
  },
  {
    label: "Team",
    href: "/team",
    icon: <MdGroups />,
  },
];

const NavLink = ({ children, href, ...props }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
    passHref
    {...props}
  >
    {children}
  </Link>
);

export default function NavBar(...props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      zIndex="55"
      position="fixed"
      width="100%"
      {...props}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <NextLink href={"/"} passHref>
              <Avatar
                as={Link}
                size={"md"}
                src={"fiezt.svg"}
              />
            </NextLink>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link.label.toLowerCase()} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <ColorModeButton />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                onClick={onClose}
                leftIcon={link.icon}
              >
                <Flex minWidth="max-content" alignItems={"center"} gap="2">
                  {link.icon}
                  {link.label}
                </Flex>
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
