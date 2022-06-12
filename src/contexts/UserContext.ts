import { createContext } from 'react';
import { SetStateAction, Dispatch } from 'react';

type User = {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<User | null>(null);
