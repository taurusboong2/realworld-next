import { useEffect, useState } from 'react';
import { getLogin } from '../network/request';

export const useGetLogin = (token?: string | null) => {
  const [name, setName] = useState<string | number>('');

  useEffect(() => {
    if (!token) return;
    (async () => {
      getLogin().then(res => {
        setName(res.username);
      });
    })();
  }, []);

  return { name };
};
