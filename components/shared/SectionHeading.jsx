import { Box } from "@chakra-ui/react";

function SectionHeading({ children, ...props }) {
  return (
    <Box
      as="span"
      display="inline-block"
      position="relative"
      w={"100%"}
      {...props}
    >
      {children}
      <Box
        as="span"
        display="block"
        position="absolute"
        bg={"gray.500"}
        w={"full"}
        h={props.h || "5px"}
        bottom={-2}
        rounded="lg"
      />
    </Box>
  );
}

export default SectionHeading;
