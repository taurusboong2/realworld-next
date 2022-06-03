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
  email: string | undefined;
  password: string | undefined;
};
