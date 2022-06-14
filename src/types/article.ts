export type UserType = {
  bio: string;
  email: string;
  image: string;
  token: string;
  username: string;
};

export type ServerData = {
  user: UserType;
};

export type CreateArticleData = {
  article: {
    title: string;
    description: string;
    body: string;
    tagList?: any;
  };
};

export type UpdataArticle = {
  article: {
    title: string;
    description?: string;
    body?: string;
    tagList?: any;
  };
};

export type ArticleList = {
  articles: [];
  articlesCount: number;
};

export type ArticleFeed = {
  slug: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
  title: string;
  description: string;
  body: string;
  createdAt: string;
  favoritesCount: number;
  favorited: boolean;
  tagList: string[] | string;
};

export type SingleArticle = {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[] | [];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
  };
};

export type PropArticle = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string | string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
};
