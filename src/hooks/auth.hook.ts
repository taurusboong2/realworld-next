import { useEffect, useState } from 'react';
import { LoginInputValue, SignUpInput, UpdateInput, UserType } from '../../src/types/auth';
import { Auth } from '../networks/auth';

export const useGetLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchLogin = async (inputValue: LoginInputValue) => {
    setLoading(true);
    const { status, data, error } = await Auth.login(inputValue);
    setLoading(false);
    return { status, data, error };
  };

  return { isLoading, fetchLogin };
};

export const useSignUp = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const createSignUp = async (signUpValue: SignUpInput) => {
    setLoading(true);
    const { status, data, error } = await Auth.signUp(signUpValue);
    setLoading(false);
    return { status, data, error };
  };

  return { createSignUp, isLoading };
};

export const useUpdate = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const updateUser = async (updateData: UpdateInput) => {
    setLoading(true);
    const { status, data, error } = await Auth.update(updateData);
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
      const result = await Auth.getProfile();
      setUserData(result);
      setLoading(false);
    })();
  }, []);

  return { isLoading, userData };
};
