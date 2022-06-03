import React, { useRef } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MyLink from '../components/MyLink';
import NavBar from '../components/NavBar';
import { useGetLogin } from '../../hooks/realWorldHooks';

const Login: NextPage = () => {
  const router = useRouter();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

  const { isLoading, getToken, token } = useGetLogin();

  const submitLogin = async () => {
    const response = await getToken({
      email: emailInputRef.current?.value as string,
      password: passWordInputRef.current?.value as string,
    });
    console.log(response);
    localStorage.setItem('token', token as string);
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

              <form onSubmit={submitLogin}>
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
                    onClick={submitLogin}>
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
