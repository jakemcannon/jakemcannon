import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";
import { Grid, GridItem, Link, Tooltip } from "@chakra-ui/react";

import questionMetaData from "../src/questions.json";

function computeBackgroundColor(difficulty: string) {
  if (difficulty === "Hard") {
    return "red.500";
  } else if (difficulty === "Medium") {
    return "yellow.500";
  }
  return "green.500";
}

function Algorithms({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Grid templateColumns="repeat(15, 1fr)" gap={2}>
        {questionMetaData.map((question) => {
          return (
            <Tooltip
              key={question.title}
              hasArrow
              label={question.title}
              aria-label="A tooltip"
            >
              {question.hasEditorial ? (
                <Link href={`posts/${question.titleSlug}`}>
                  <GridItem
                    w="100%"
                    h="10"
                    bg={computeBackgroundColor(question.difficulty)}
                    border="1px"
                    borderRadius={2}
                  >
                    {question.id}
                  </GridItem>
                </Link>
              ) : (
                <GridItem w="100%" h="10" border="1px" borderRadius={2}>
                  {question.id}
                </GridItem>
              )}
            </Tooltip>
          );
        })}
      </Grid>
      {/* <Articles posts={posts} /> */}
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .filter((post) => post.meta.directory === "problems")
    .map((post) => post.meta);

  return { props: { posts } };
}

export default Algorithms;
