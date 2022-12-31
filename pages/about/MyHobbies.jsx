import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import React from "react";
import { hobbies } from "../../data";

function MyHobbies() {
  return (
    <List spacing={2}>
      {hobbies.map((hobby, index) => {
        return (
          <ListItem key={index}>
            <ListIcon as={AiOutlineRight} color="green.500" />
            {hobby}
          </ListItem>
        );
      })}
    </List>
  );
}

export default MyHobbies;
