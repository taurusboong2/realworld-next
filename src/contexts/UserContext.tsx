import React, { createContext } from 'react';
import { UserData } from '../types/auth';
import { useInitLoginUser } from '../hooks/auth.hook';

export const UserContext = createContext<UserData | null>(null);

export const LoginUserContextProvider = props => {
  const { children } = props;
  const { userData } = useInitLoginUser();

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};
