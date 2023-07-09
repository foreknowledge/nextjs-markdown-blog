export type PostMeta = {
  id: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  categories?: string[];
};

export type PostData = PostMeta & {
  contentHtml: string;
};
