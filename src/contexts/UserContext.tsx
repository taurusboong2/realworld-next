import React, { createContext, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { UserData } from '../types/auth';
import { getUserInfo } from '../networks/auth';

type LoadingStatus = 'initial' | 'loading' | 'done' | 'error';

type ContextData = {
  loadingStatus: LoadingStatus;
  user: UserData | null;
  setUser: Dispatch<SetStateAction<UserData>> | null;
};

export const UserContext = createContext<ContextData>({
  loadingStatus: 'initial',
  user: null,
  setUser: null,
});

export const LoginUserContextProvider = props => {
  const { children } = props;
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>('initial');
  const [user, setUser] = useState<UserData>(null);

  useEffect(() => {
    (async () => {
      setLoadingStatus('loading');
      try {
        const result = await getUserInfo();
        setUser(result);
        setLoadingStatus('done');
      } catch {
        setLoadingStatus('done');
      }
    })();
  }, []);

  return <UserContext.Provider value={{ loadingStatus, user, setUser }}>{children}</UserContext.Provider>;
};
