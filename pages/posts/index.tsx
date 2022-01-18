import Head from "next/head";

import { getAllPosts } from "../../lib/api";
import { CMS_NAME } from "../lib/constants";
// import Post from "../types/";

// type Props = {
//   allPosts: Post[];
// };

const Index = ({ allPosts }) => {
  return (
    <>
      {allPosts.map((post) => (
        <div>{post.slug}</div>
      ))}
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  console.log("post/index");
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
