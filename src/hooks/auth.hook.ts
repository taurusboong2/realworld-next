import { useEffect, useState, useContext } from 'react';
import { LoginInputValue, SignUpInput, UpdateInput, UserData } from '../../src/types/auth';
import { login, logout, createUser, patchUser, getUserInfo } from '../networks/auth';
import { UserContext } from '../contexts/UserContext';
import { setTokenFromStorage } from '../commons/tokenStorage';

export const useLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { setUser } = useUserContext();

  const fetchLogin = async (inputValue: LoginInputValue) => {
    setLoading(true);
    const { status, data, error } = await login(inputValue);
    setUser && setUser(data || null);
    setTokenFromStorage(data?.user.token as string);
    setLoading(false);
    return { status, data, error };
  };

  return { isLoading, fetchLogin };
};

export const useLogout = () => {
  const { setUser } = useUserContext();

  const logoutUser = () => {
    logout();
    setUser && setUser(null);
  };
  return {
    logoutUser,
  };
};

export const useSignUp = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const createSignUp = async (signUpValue: SignUpInput) => {
    setLoading(true);
    const { status, data, error } = await createUser(signUpValue);
    setLoading(false);
    return { status, data, error };
  };

  return { createSignUp, isLoading };
};

export const useUpdateProfile = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);

  const updateUser = async (updateData: UpdateInput) => {
    setLoading(true);
    const { status, data, error } = await patchUser(updateData);
    setUser && setUser(data || null);
    setLoading(false);
    return { status, data, error };
  };

  return { isLoading, updateUser };
};

export const useInitLoginUser = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getUserInfo();
      setUserData(result);
      setLoading(false);
    })();
  }, []);

  return { isLoading, userData };
};

export const useLoginUser = () => {
  const userData = useContext(UserContext);

  return userData;
};

export const useUserContext = () => {
  const { user, setUser, loadingStatus } = useContext(UserContext);

  return { user: user?.user, setUser, loadingStatus };
};
