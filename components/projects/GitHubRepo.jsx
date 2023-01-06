import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ScrollBox from "../shared/ScrollBox";
import SectionHeading from "../shared/SectionHeading";
import RepoCard from "./RepoCard";

function GitHubRepo({ repos }) {
  const [page, setPage] = React.useState(1);

  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  return (
    <>
      <SectionHeading mb={4}>
        <Flex>
          <HStack>
            <Text as="b" fontSize={"xl"}>
              GitHub Repositories
            </Text>
          </HStack>
        </Flex>
      </SectionHeading>
      <ScrollBox mt={2} maxH={"md"} pr={4} rounded="md">
        {paginate(repos, 30, page).map((repo, i) => {
          return <RepoCard key={i} mt={2} mb={2} data={repo} />;
        })}
      </ScrollBox>

      <Center mt={4}>
        <ButtonGroup spacing={5}>
          <Button
            isDisabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            // isLoading={loading}
          >
            Previous
          </Button>
          <Button
            isDisabled={
              repos.length < 30 ||
              !repos.length ||
              page == Math.ceil(repos.length / 30)
            }
            onClick={() => setPage((prev) => prev + 1)}
            // isLoading={loading}
          >
            Next
          </Button>
        </ButtonGroup>
      </Center>
    </>
  );
}

export default GitHubRepo;
