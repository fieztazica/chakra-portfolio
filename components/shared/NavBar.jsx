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
import { BsPersonFill } from "react-icons/bs";
import { MdGroups, MdWork } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { ReactComponent as fieztLogo } from "../../public/fiezt.svg";
import Logo from "./Logo";
import { useRouter } from "next/router";

const Links = [
  {
    label: "About",
    href: "/about",
    icon: <BsPersonFill />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <MdWork />,
  },
  {
    label: "Team",
    href: "/team",
    icon: <MdGroups />,
  },
];

const NavLink = ({ children, href, rPath, ...props }) => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  return (
    <Link
      as={NextLink}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: bgColor,
      }}
      bg={rPath === href ? bgColor : "transparent"}
      href={href}
      passHref
      {...props}
    >
      {children}
    </Link>
  );
};

export default function NavBar(...props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

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
            <NextLink href={"/"}>
              <Logo />
            </NextLink>
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink
                key={link.label.toLowerCase()}
                href={link.href}
                rPath={router.pathname}
              >
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
