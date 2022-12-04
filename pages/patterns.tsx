import { getAllTags } from "@/src/api";
import PatternHeading from "@/src/components/patternheading";

import { Heading } from "@chakra-ui/react";

interface PatternProps {
  tags: string[];
}

function Patterns({ tags }: PatternProps) {
  return (
    <>
      <Heading as="h3" size="lg">
        Patterns
      </Heading>
      <PatternHeading tags={tags} />
    </>
  );
}

export async function getStaticProps() {
  const tags = getAllTags();
  return { props: { tags: tags } };
}

export default Patterns;
