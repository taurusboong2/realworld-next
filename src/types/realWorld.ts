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

export type Token = {
  user: {
    token: string;
  };
};

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
    tagList: string | string[];
  };
};

export type SignUpResponse = {
  status: number;
};
