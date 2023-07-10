import PostItem from '@/components/post-item/PostItem';
import { getAllSortedPostsData } from '@/lib/posts';
import styles from '@/styles/home.module.css';
import { PostMeta } from '@/types/post';
import { GetStaticProps } from 'next';
import { Jua } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const jua = Jua({ subsets: ['latin'], weight: ['400'] });

const metadata = {
  title: 'Next.js Blog',
  description: 'Next.js로 만든 블로그 입니다 :)',
};

interface Props {
  allPostsData: PostMeta[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <header className={`${styles.header} ${jua.className}`}>
          <h1 className={styles.title}>{metadata.title}</h1>
          <h3 className={styles.description}>{metadata.description}</h3>
        </header>
        <ul>
          {allPostsData.map((post) => (
            <Link href={`/${post.id}`}>
              <li key={post.id} className={styles.postItem}>
                <PostItem post={post} />
              </li>
            </Link>
          ))}
        </ul>
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
