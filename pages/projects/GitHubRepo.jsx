import {
    Button,
    ButtonGroup,
    Center,
    Fade,
    Flex,
    HStack,
    Spinner,
    Text,
} from "@chakra-ui/react";
import React from "react";
import {data} from "../../data/github/fake";
import {getOwnerRepos} from "../../lib/github";
import ScrollBox from "../../components/shared/ScrollBox";
import SectionHeading from "../../components/shared/SectionHeading";
import RepoCard from "../../components/projects/RepoCard";
import ReposSkeleton from "../../components/projects/ReposSkeleton";

function GitHubRepo() {
    const [loading, setLoading] = React.useState(false);
    const [repos, setRepos] = React.useState([]);
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
    }, [page]);

    return (
        <>
            <SectionHeading mb={4}>
                <Flex>
                    <HStack>
                        <Text as="b" fontSize={"xl"}>
                            GitHub Repositories
                        </Text>
                        <Fade in={loading}>
                            <Spinner/>
                        </Fade>
                    </HStack>
                    <ButtonGroup></ButtonGroup>
                </Flex>
            </SectionHeading>
            <ScrollBox mt={2} maxH={"md"} pr={4} rounded="md">
                {loading && <ReposSkeleton mt={2} mb={2}/>}
                {repos.map((repo, i) => {
                    return <RepoCard key={i} mt={2} mb={2} data={repo}/>;
                })}
            </ScrollBox>

            <Center mt={4}>
                <ButtonGroup spacing={5}>
                    <Button
                        isDisabled={page === 1}
                        onClick={() => setPage((prev) => (prev - 1 === 0 ? 1 : prev - 1))}
                        isLoading={loading}
                    >
                        Previous
                    </Button>
                    <Button
                        isDisabled={repos.length < 30 || !repos.length}
                        onClick={() => setPage((prev) => prev + 1)}
                        isLoading={loading}
                    >
                        Next
                    </Button>
                </ButtonGroup>
            </Center>
        </>
    );
}

export default GitHubRepo;
