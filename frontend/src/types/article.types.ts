export interface Article {
  id: string;
  title: string;
  description: string;
}

export type ArticleCreationPayload = Omit<Article, "id">;
