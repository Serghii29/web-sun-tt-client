export interface Link {
  title: string;
  link: string;
}

export type Links = Link[];

export interface ArticleType {
  id: number;
  createdAt: string;
  category: string;
  author: string;
  title: string;
  text: string;
  time: string;
  img: string;
}
