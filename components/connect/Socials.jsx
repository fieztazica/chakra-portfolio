import {
  Box,
  Text,
  Icon,
  Link,
  Center,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { socials } from "../../data/constants";

function SocialButton({ href, label, icon, ...props }) {
  return (
    <Box
      as={Link}
      href={href}
      borderWidth="1px"
      rounded="md"
      isExternal
      p={2}
      w="max-content"
      align="center"
      justifyContent={"center"}
      {...props}
    >
      <Icon as={icon} boxSize={16}></Icon>
      <Text>{label}</Text>
    </Box>
  );
}

function Socials() {
  return (
    <Wrap spacing={4} justify="center">
      {socials.map((s, i) => {
        const { href, icon, label } = s;
        return (
          <WrapItem key={i}>
            <SocialButton href={href} icon={icon} label={label} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
}

export default Socials;
