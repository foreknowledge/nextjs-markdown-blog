import PostList from '@/components/post-list/PostList';
import { getAllSortedPostsData } from '@/lib/posts';
import { PostMeta } from '@/types/post';
import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  allPostsData: PostMeta[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
        <meta name="description" content="Next.js로 만든 블로그 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <h1>Posts</h1>
        <PostList posts={allPostsData} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getAllSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};
