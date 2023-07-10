import { PostMeta } from '@/types/post';
import ChipList from '../chip/ChipList';
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
      {post.tags && (
        <div className={styles.tags}>
          <ChipList textList={post.tags} />
        </div>
      )}
    </>
  );
}
