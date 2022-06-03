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
