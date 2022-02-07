import { FC } from 'react';
import Link from 'next/link';

import { getAllPosts } from '@/lib/api';
import Post from '@/types/post';

type Props = {
  allPosts: Post[];
};

const Posts: FC<Props> = ({ allPosts }) => {
  return (
    <div className='posts mx-auto my-auto max-w-7xl'>
      {allPosts
        .filter(({ title }) => title)
        .map((post, idx) => (
          <article
            key={post.title}
            className='article my-4 flex grid-cols-4 flex-col border-b-2 pb-4 xl:grid'
          >
            <div className='article__left-side col-span-3'>
              <Link href={`/posts/${post.slug}`} passHref>
                <div>
                  <span className='article__title text-blue-grey-800 cursor-pointer text-2xl font-semibold leading-8'>
                    {post.title}
                  </span>
                  <p className='article__introduction mx-0 my-2 h-12 cursor-pointer text-ellipsis text-gray-500 line-clamp-2'>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
              <div className='label flex gap-2'>
                {post.labels?.map(label => (
                  <span
                    key={label}
                    className='label__item rounded-2xl bg-gray-200 px-2 py-[0.125rem]'
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            {post.date && (
              <span className='article__time self-end text-sm'>
                最後修改時間： {new Date(post.date).toISOString().slice(0, 10)}
              </span>
            )}
          </article>
        ))}
    </div>
  );
};

export default Posts;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'labels',
  ]);

  return {
    props: { allPosts },
  };
};
