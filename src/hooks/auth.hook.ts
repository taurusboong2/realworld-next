import { useEffect, useState, useContext } from 'react';
import { LoginInputValue, SignUpInput, UpdateInput, UserType } from '../../src/types/auth';
import { login, logout, createUser, patchUser, getProfile } from '../networks/auth';
import { UserContext } from '../contexts/UserContext';

export const useLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const { setUser } = useUserContext();

  const fetchLogin = async (inputValue: LoginInputValue) => {
    setLoading(true);
    const { status, data, error } = await login(inputValue);
    setUser && setUser(data || null);
    setLoading(false);
    return { status, data, error };
  };

  return { isLoading, fetchLogin };
};

export const useLogout = () => {
  return {
    logout,
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

  const updateUser = async (updateData: UpdateInput) => {
    setLoading(true);
    const { status, data, error } = await patchUser(updateData);
    setLoading(false);
    return { status, data, error };
  };

  return { isLoading, updateUser };
};

export const useFetchProfile = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getProfile();
      setUserData(result);
      setLoading(false);
    })();
  }, []);

  return { isLoading, userData };
};

export const useUserContext = () => {
  const { user, setUser, loadingStatus } = useContext(UserContext);

  return { user, setUser, loadingStatus };
};
