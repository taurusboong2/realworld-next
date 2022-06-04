import { useEffect, useState } from 'react';
import { getLoginToken, getLogin, fetchSignUp } from '../network/request';
import { LoginInputValue, SignUpInput } from '../src/types/realWorld';

export const useGetLoginToken = (token?: string | null) => {
  const [name, setName] = useState<string | number>('');

  useEffect(() => {
    if (!token) return;
    (async () => {
      getLoginToken(token).then(res => {
        setName(res.username);
      });
    })();
  }, []);

  return { name };
};

export const useGetLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const getToken = async (data: LoginInputValue) => {
    if (!data) return;
    setLoading(true);
    const tokenValue = await getLogin(data);
    setLoading(false);
    return tokenValue;
  };

  return { isLoading, getToken };
};

export const useFetchSignUp = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const signUp = async (data: SignUpInput) => {
    setLoading(true);
    const res = await fetchSignUp(data);
    console.log(res);
    setLoading(false);
  };

  return { signUp, isLoading };
};
