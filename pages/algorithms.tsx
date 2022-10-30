import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

function Algorithms({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <h1>Articles</h1>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
    const posts = getAllPosts()
      .slice(0, 9)
      .filter((post) => post.meta.directory === "problems")
      .map((post) => post.meta)
  
    return { props: { posts } };
  }

export default Algorithms;
