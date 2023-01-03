import { Divider, Flex } from "@chakra-ui/react";

function DividerWith({ children, ...props }) {
  return (
    <Flex align="center" {...props}>
      <Divider />
      {children}
      <Divider />
    </Flex>
  );
}

export default DividerWith;
