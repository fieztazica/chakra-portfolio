import { Box, HStack, Link, List, ListItem, Text } from "@chakra-ui/react";
import { milestones } from "../../data";
import Markdown from "markdown-to-jsx";

function Milestones() {
  return (
    <List>
      {milestones.map((e, i) => (
        <ListItem key={i}>
          <HStack>
            <Text as="b">{e?.time}</Text>
            <Markdown
              options={{
                forceBlock: true,
                overrides: {
                  a: {
                    component: Link,
                    props: {
                      isExternal: true,
                    },
                  },
                },
              }}
            >
              {e?.des}
            </Markdown>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default Milestones;
