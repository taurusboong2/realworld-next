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

export type LoginInputValue = {
  user: {
    email: string;
    password: string;
  };
} | null;

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
    password: string;
  };
};

export type UpdateInput = {
  user: {
    email: string;
    password: string;
    username: string;
    bio?: string;
    image?: string;
  };
};

export type SignUpResponse = {
  status: number;
};
