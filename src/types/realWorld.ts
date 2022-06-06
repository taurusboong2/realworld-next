type UserType = {
  bio: string | number;
  email: string | number;
  image: string | number;
  token: string | number;
  username: string | number;
};

export type ServerData = {
  user: UserType;
};

export type LoginInputValue = {
  user: {
    email: string;
    password: string;
  };
};

export type UserData = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string | null;
  };
} | null;

export type SignUpInput = {
  user: {
    username: string;
    email: string;
    password: string | number;
  };
};

export type CreateArticleData = {
  article: {
    title: string;
    description: string;
    body: string;
    tagList?: any;
  };
};

export type SignUpResponse = {
  status: number;
};

export type ArticleList = {
  articles: [];
  articlesCount: number;
};

export type ArticleFeed = {
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
  slug: string;
  createdAt: string;
  favoritesCount: number;
  title: string;
  description: string;
};
