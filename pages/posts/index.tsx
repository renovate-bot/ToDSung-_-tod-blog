import Link from "next/link";

import { getAllPosts } from "../../lib/api";

// import Post from "../types/";

// type Props = {
//   allPosts: Post[];
// };

const Posts = ({ allPosts }) => {
  console.log(allPosts);
  return (
    <div className="posts mx-auto my-auto max-w-7xl">
      {allPosts
        .filter(({ title }) => title)
        .map((post, idx) => (
          <article
            key={post.title}
            className="article xl:grid grid-cols-4 mt-4 mb-8 mx-4 flex flex-col"
          >
            <div className="article__left-side col-span-3">
              <Link href={`/posts/${post.slug}`} passHref>
                <div>
                  <span className="article__title text-2xl leading-8 text-blue-grey-800">
                    {post.title}
                  </span>
                  <p className="article__introduction mx-0 my-2 text-ellipsis line-clamp-2 text-gray-500">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
              <div className="label flex gap-2">
                {post.labels?.map((label) => (
                  <span
                    key={label}
                    className="label__item px-2 py-[0.125rem] bg-gray-300 rounded-2xl"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            {post.date && (
              <span className="article__time self-end text-sm">
                最後修改時間：{post.date}
              </span>
            )}
          </article>
        ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  console.log("post/index");
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "labels",
  ]);

  return {
    props: { allPosts },
  };
};
