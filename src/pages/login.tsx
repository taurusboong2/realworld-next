import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MyLink from '../components/MyLink';
import NavBar from '../components/NavBar';
import { api } from '../../config/api';

const Login: NextPage = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

  const loginSubmit = async () => {
    setLoading(true);
    await api
      .post(`/users/login`, {
        user: {
          email: emailInputRef.current?.value as string,
          password: passWordInputRef.current?.value as string | number,
        },
      })
      .then(res => {
        console.log(res.status === 200 ? '성공' : '실패');
        console.log(res.data);
        console.log(res.data.user.token);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
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
