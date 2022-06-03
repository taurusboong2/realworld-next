import { useEffect, useState } from 'react';
import { getLoginToken, getLogin } from '../network/request';
import { LoginInputValue } from '../src/types/realWorld';

export const useGetLoginToken = (token?: string | null) => {
  const [name, setName] = useState<string | number>('');

  useEffect(() => {
    if (!token) return;
    (async () => {
      getLoginToken().then(res => {
        setName(res.username);
      });
    })();
  }, []);

  return { name };
};

export const useGetLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  const getToken = async (data: LoginInputValue) => {
    if (!data) return;
    setLoading(true);
    const result = await getLogin(data);
    setToken(result.user.token);
    setLoading(false);
  };

  return { isLoading, getToken, token };
};
