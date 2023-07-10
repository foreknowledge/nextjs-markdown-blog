import PostDetail from '@/components/PostDetail';
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
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <main className={inter.className}>
        <PostDetail postData={postData} />
      </main>
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

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  const postData = await getPostData(params!.id);

  return {
    props: {
      postData,
    },
  };
};
