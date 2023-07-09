import { PostMeta } from '@/types/post';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

const postsDir = path.join(process.cwd(), '__posts');

export function getAllSortedPostsData(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return { id, ...matterResult.data } as PostMeta;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
