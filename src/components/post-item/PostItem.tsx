import { PostMeta } from '@/types/post';
import styles from './post-item.module.css';

interface Props {
  post: PostMeta;
}

export default function PostItem({ post }: Props) {
  return (
    <>
      <div className={styles.topInfo}>
        <div className={styles.categories}>
          {post.categories?.join(' / ') ?? '카테고리 없음'}
        </div>
        <div className={styles.verticalDiv}>|</div>
        <div className={styles.date}>{post.date}</div>
      </div>
      <h2 className={styles.title}>{post.title}</h2>
      <div className={styles.description}>{post?.description}</div>
      <div className={styles.tags}>{post.tags?.join(', ')}</div>
    </>
  );
}
