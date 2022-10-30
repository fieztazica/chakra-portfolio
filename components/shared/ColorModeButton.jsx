import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

function ColorModeButton(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      rounded={"full"}
      variant={"ghost"}
      onClick={toggleColorMode}
      aria-label={"Color Mode Toggle"}
      {...props}
    />
  );
}

export default ColorModeButton;
