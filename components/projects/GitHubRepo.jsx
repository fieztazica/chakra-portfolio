import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { data } from "../../data/github/fake";
import { getOwnerRepos } from "../../lib/github";
import SectionHeading from "../shared/SectionHeading";
import RepoCard from "./repoCard";

const array = [data];

function GitHubRepo() {
  const [repos, setRepos] = React.useState([data]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  function fetchRepos() {
    setLoading(true);
    getOwnerRepos(page)
      .then((data) => {
        setLoading(false);
        setRepos(data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  React.useEffect(() => {
    fetchRepos();
  }, []);
  
  return (
    <>
      <SectionHeading mb={4}>
        <Text as="b" fontSize={"xl"}>
          GitHub Repositories
        </Text>
      </SectionHeading>
      <Box mt={2}>
        {repos.map((repo, i) => {
          return <RepoCard key={i} mt={2} data={repo} />;
        })}
      </Box>
    </>
  );
}

export default GitHubRepo;
