import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  Text,
  Tooltip,
  UnorderedList,
  useToast,
  Kbd,
} from "@chakra-ui/react";
import CopyToClipboard from "react-copy-to-clipboard";

const emails = ["fiezt@outlook.com", "fiezt@pm.me"];

function Emails() {
  const toast = useToast();
  return (
    <Box>
      <Text>You can contact me via these emails:</Text>
      <UnorderedList>
        {emails.map((email, i) => {
          return (
            <ListItem key={i}>
              <Tooltip label="Click to open mail">
                <Link href={`mailto:${email}`}>{email}</Link>
              </Tooltip>
              <CopyToClipboard
                onCopy={() =>
                  toast({
                    title: `Copied ${email}!`,
                    isClosable: true,
                    status: "success",
                  })
                }
                text={email}
              >
                <Button ml={2} size={"xs"} variant="ghost" p={1}>
                  <span>
                    <Kbd>ctrl</Kbd> <Kbd>C</Kbd>
                  </span>
                </Button>
              </CopyToClipboard>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}

export default Emails;
