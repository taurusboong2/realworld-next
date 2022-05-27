import { StrapiResponse } from './strapi';

export type Article = {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
};

export type ArticleListItem = {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
};

export type PaginationMeta = {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};

export type ArticleListRes = StrapiResponse<ArticleListItem[], PaginationMeta>;
export type ArticleDetailRes = StrapiResponse<Article>;

export type ArticleCreateValue = {
  data: {
    title: string;
    description: string;
  };
};
