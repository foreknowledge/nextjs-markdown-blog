import { PostData } from '@/types/post';

interface Props {
  postData: PostData;
}

export default function PostDetail({ postData }: Props) {
  return (
    <>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}
