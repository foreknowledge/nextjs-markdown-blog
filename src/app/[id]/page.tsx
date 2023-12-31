import ChipList from '@/components/chip/ChipList';
import { getAllPostIds, getPostData } from '@/lib/posts';
import styles from '@/styles/post.module.css';
import { Metadata } from 'next';
import { Jua } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const jua = Jua({ subsets: ['latin'], weight: '400' });

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const postData = await getPostData(params.id);

  return {
    title: postData.title,
    description: postData.description,
  };
}

export default async function PostPage({ params }: Props) {
  const postData = await getPostData(params.id);

  return (
    <main>
      <section className={styles.navBar}>
        <Link href="/" className={styles.btnGoHome}>
          <span>← Home</span>
        </Link>
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
  );
}

export async function generateStaticParams() {
  return getAllPostIds();
}
