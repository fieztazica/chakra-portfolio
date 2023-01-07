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
  Progress,
  Fade,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  AvatarBadge,
  Tooltip,
  Square,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeButton from "./ColorModeButton";
import NextLink from "next/link";
import { BsPersonFill } from "react-icons/bs";
import { MdGroups, MdWork, MdChat } from "react-icons/md";
import { ReactComponent as fieztLogo } from "../../public/fiezt.svg";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

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

export default function NavBar(props) {
  const hamburgerPanel = useDisclosure();
  const hamburgerRef = useRef();
  const indicator = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      indicator.onOpen();
    };

    const handleStop = () => {
      indicator.onClose();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Fade in={indicator.isOpen}>
        <Progress
          colorScheme={"cyan"}
          height="2px"
          flex={1}
          position="fixed"
          zIndex={"99"}
          isIndeterminate
          w="100%"
        />
      </Fade>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        zIndex="98"
        position="fixed"
        width="100%"
        {...props}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={hamburgerPanel.onOpen}
            variant={useColorModeValue("solid", "ghost")}
            isRound
            ref={hamburgerRef}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NextLink href={"/"}>
                <Logo />
              </NextLink>
            </Box>
            <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
              {Links.map((link, i) => {
                const isActive = router.pathname == link.href;
                return (
                  <Button
                    as={NextLink}
                    key={i}
                    href={link.href}
                    size="sm"
                    variant={isActive ? "solid" : "ghost"}
                    colorScheme={isActive ? "cyan" : "gray"}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </HStack>
          </HStack>
          <ColorModeButton />
        </Flex>
        <Drawer
          isOpen={hamburgerPanel.isOpen}
          placement="left"
          onClose={hamburgerPanel.onClose}
          finalFocusRef={hamburgerRef}
          // size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Flex align={"center"}>
                <IconButton
                  icon={<CloseIcon />}
                  aria-label={"Close Menu"}
                  onClick={hamburgerPanel.onClose}
                  variant={"ghost"}
                  isRound
                />
                <Spacer />
                <Square>
                  <Text as="samp" fontSize={"sm"}>
                    Fiezt&apos;s Portfolio
                  </Text>
                </Square>
                <Spacer />
                <Logo />
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Stack justify="left">
                {Links.map((link, i) => {
                  const isActive = router.pathname == link.href;
                  return (
                    <Button
                      as={NextLink}
                      key={i}
                      fontSize="lg"
                      href={link.href}
                      onClick={hamburgerPanel.onClose}
                      leftIcon={link.icon}
                      variant={isActive ? "solid" : "ghost"}
                      colorScheme={isActive ? "cyan" : "gray"}
                      width="full"
                      justifyContent={"left"}
                    >
                      {link.label}
                    </Button>
                  );
                })}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
