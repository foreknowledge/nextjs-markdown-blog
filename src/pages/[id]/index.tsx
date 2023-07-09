import { getAllPostIds, getPostData } from '@/lib/posts';
import { PostData } from '@/types/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  postData: PostData;
}

export default function PostPage({ postData }: Props) {
  console.log(postData);
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <main className={inter.className}></main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};
