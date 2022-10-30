import { Box } from "@chakra-ui/react";

function ScrollBox({ children, maxH = "md", ...props }) {
  return (
    <Box
      maxH={maxH}
      overflow="auto"
      css={{
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: `#718096`,
          borderRadius: "24px",
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default ScrollBox;
