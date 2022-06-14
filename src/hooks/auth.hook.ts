import { useEffect, useState, useContext } from 'react';
import { LoginInputValue, SignUpInput, UpdateInput, UserData, UserType } from '../../src/types/auth';
import { login, createUser, patchUser, getUserInfo, getProfile } from '../networks/auth';
import { UserContext } from '../contexts/UserContext';

export const useLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchLogin = async (inputValue: LoginInputValue) => {
    setLoading(true);
    const { status, data, error } = await login(inputValue);
    setLoading(false);
    return { status, data, error };
  };

  return { isLoading, fetchLogin };
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
