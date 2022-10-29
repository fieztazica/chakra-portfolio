import { Avatar, useColorMode } from "@chakra-ui/react";

function Logo(props) {
  const { colorMode } = useColorMode();
  return (
    <Avatar
      p={1}
      size={"md"}
      src={"fiezt.svg"}
      shadow={"lg"}
      filter={colorMode === "light" && "invert(100%)"}
      transition="transform .2s"
      _hover={{
        textDecoration: "none",
        transform: "scale(1.2)",
      }}
      {...props}
    />
  );
}

export default Logo;
