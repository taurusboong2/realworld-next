import React, { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { useUserContext } from '../../../hooks/auth.hook';

type Props = {
  children: React.ReactNode;
};

const WithLogin: FC<Props> = props => {
  const { children } = props;

  const router = useRouter();
  const { user, loadingStatus } = useUserContext();

  useEffect(() => {
    if (loadingStatus === 'done' && !user) {
      router.replace('/');
    }
  }, [loadingStatus, user]);

  if (loadingStatus !== 'done' || !user) {
    return <></>;
  }

  return <>{children}</>;
};

export default WithLogin;
