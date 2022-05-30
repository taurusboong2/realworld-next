import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MyLink from '../components/MyLink';
import NavBar from '../components/NavBar';
import api from '../../config/api';
import axios from 'axios';
import { setItem } from '../commons/localStorage';

const Login: NextPage = () => {
  const [isLoading, setLoading] = useState(false); // 이거랑 loginSubmit 함수를 훅으로 분리하기

  const router = useRouter();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

  const loginSubmit = async () => {
    setLoading(true);
    const { data, config, request } = await api.post(`/users/login`, {
      // network 함수로 다 분리하기
      // 제네릭으로 response 타입 선언해주기
      user: {
        email: emailInputRef.current?.value as string,
        password: passWordInputRef.current?.value as string | number,
      },
    });
    console.log(config);
    console.log(request);
    const token = data.user.token;
    setItem('token', token); // 로컬스토리지 함수 별도로 분리하기
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.user.token}`;
    setLoading(false);
    router.push('/');
  };

  return (
    <Wrap>
      <NavBar />
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <MyLink href="/signUp">Need an account?</MyLink>
              </p>

              <form onSubmit={loginSubmit}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      ref={emailInputRef}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      autoComplete="on"
                      placeholder="Password"
                      ref={passWordInputRef}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={isLoading}
                    onClick={loginSubmit}>
                    Sign in
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div``;
