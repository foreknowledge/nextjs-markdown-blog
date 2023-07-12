import PostItem from '@/components/post-item/PostItem';
import { getAllSortedPostsData } from '@/lib/posts';
import styles from '@/styles/home.module.css';
import { Jua } from 'next/font/google';
import Link from 'next/link';

const jua = Jua({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Next.js Blog',
  description: 'Next.js로 만든 블로그 입니다 :)',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  const allPostsData = getAllSortedPostsData();

  return (
    <main className={styles.container}>
      <header className={`${styles.header} ${jua.className}`}>
        <h1 className={styles.title}>{metadata.title}</h1>
        <h3 className={styles.description}>{metadata.description}</h3>
      </header>
      <ul>
        {allPostsData.map((post) => (
          <Link key={post.id} href={`/${post.id}`}>
            <li className={styles.postItem}>
              <PostItem post={post} />
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
