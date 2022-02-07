import { FC } from 'react';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { join } from 'path';

import PostBody from '@/components/Post/PostBody';
// import PostHeader from "@/components/post-header";
// import PostTitle from "@/components/post-title";
import { getAllPosts, getPostByPath, POSTS_ROOT_NAME } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

type Props = {
  post: {
    slug?: string;
    title: string;
    content: string;
  };
};

const Post: FC<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return router.isFallback ? (
    // <PostTitle>Loading…</PostTitle>
    <></>
  ) : (
    <>
      <article className='mt-4 mb-8'>
        <Head>
          <title>{post.title}</title>
        </Head>
        <PostBody content={post.content} />
      </article>
    </>
  );
};

export default Post;

type Params = {
  params: {
    slug: string[];
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const path = join(POSTS_ROOT_NAME, ...params.slug) + '.md';
  const post = getPostByPath(path, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug.split('/'),
        },
      };
    }),
    fallback: false,
  };
};
