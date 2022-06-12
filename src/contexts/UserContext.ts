import { createContext } from 'react';
import { SetStateAction, Dispatch } from 'react';

type User = {
  user: boolean | null;
  setUser: Dispatch<SetStateAction<boolean | null>>;
};
export const UserContext = createContext<User | null>(null);
