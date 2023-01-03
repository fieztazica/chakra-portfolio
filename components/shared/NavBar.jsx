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
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeButton from "./ColorModeButton";
import NextLink from "next/link";
import { BsPersonFill } from "react-icons/bs";
import { MdGroups, MdWork, MdChat } from "react-icons/md";
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
  {
    label: "Connect",
    href: "/connect",
    icon: <MdChat />,
  },
];

const NavLink = ({ children, href, rPath, ...props }) => {
  const isActive = rPath === href;
  return (
    <NextLink href={href}>
      <Button
        size="sm"
        variant={isActive ? "solid" : "ghost"}
        colorScheme={isActive ? "cyan" : "gray"}
        {...props}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default function NavBar(props) {
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
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant={useColorModeValue("solid", "ghost")}
          isRound
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <NextLink href={"/"}>
              <Logo />
            </NextLink>
          </Box>
          <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
            {Links.map((link, i) => (
              <NavLink key={i} href={link.href} rPath={router.pathname}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <ColorModeButton />
      </Flex>

      {isOpen ? (
        <>
          <Divider />
          <Box pt={2} pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, i) => (
                <NavLink
                  key={i}
                  href={link.href}
                  onClick={onClose}
                  leftIcon={link.icon}
                >
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        </>
      ) : null}
    </Box>
  );
}
