export type CommentValue = {
  comment: {
    body: string;
  };
};

export type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export type CommentType = {
  createdAt: number;
  id: string;
  body: string;
  slug: string;
  author: Author;
  updatedAt: number;
};

export type CommentList = {
  comments: CommentType[];
};
