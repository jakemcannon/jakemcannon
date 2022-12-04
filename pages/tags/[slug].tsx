import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

import { Heading } from "@chakra-ui/react";

export default function TagPage({
  slug,
  posts,
}: {
  slug: string;
  posts: PostMeta[];
}) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <Heading as="h3" size="lg">
        Tag: {slug}
      </Heading>
      <Articles posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts
        .map((post) => post.meta)
        .sort(
          (a: PostMeta, b: PostMeta) =>
            Number(new Date(a.date)) - Number(new Date(b.date))
        ),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
