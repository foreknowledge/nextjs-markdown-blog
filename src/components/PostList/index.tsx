import { PostMeta } from '@/types/post';
import Link from 'next/link';

interface Props {
  posts: PostMeta[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
