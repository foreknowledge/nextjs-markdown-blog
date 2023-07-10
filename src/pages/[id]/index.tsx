import ChipList from '@/components/chip/ChipList';
import { getAllPostIds, getPostData } from '@/lib/posts';
import styles from '@/styles/post.module.css';
import { PostData } from '@/types/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Jua } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const jua = Jua({ subsets: ['latin'], weight: '400' });

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
      <main>
        <section className={styles.navBar}>
          <button className={styles.btnGoHome}>
            <Link href="/">← Home</Link>
          </button>
        </section>
        <section className={styles.contentsWrapper}>
          <header className={`${styles.header} ${jua.className}`}>
            <h1 className={styles.title}>{postData.title}</h1>
            <span className={styles.date}>{postData.date}</span>
            {postData.tags && (
              <div className={styles.tags}>
                <ChipList textList={postData.tags} />
              </div>
            )}
          </header>
          <div className="md-contents">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </section>
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
