import { getAllTags, } from "@/src/api";
import PatternHeading from "@/src/components/patternheading";

interface PatternProps {
  tags: string[]
}

function Patterns( {tags}: PatternProps ) {
  return (
    <>
      <h1>Patterns</h1>
      <PatternHeading tags={tags} />
    </>
  );
}

export async function getStaticProps() {
    const tags = getAllTags()
    return { props: { tags: tags } };
  }

export default Patterns;
