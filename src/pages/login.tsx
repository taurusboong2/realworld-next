import React, { useRef } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MyLink from '../components/NavBar/MyLink';
import NavBar from '../components/NavBar/NavBar';
import { useGetLogin } from '../../hooks/realworld.hook';
import { setItem } from '../../common/localStorage';
import Head from '../components/MyHead/index';

const Login: NextPage = () => {
  const router = useRouter();

  const { isLoading, getTokenUserName } = useGetLogin();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

  const loginSubmit = async () => {
    const { token, userName } = await getTokenUserName({
      user: {
        email: emailInputRef.current?.value as string,
        password: passWordInputRef.current?.value as string,
      },
    });
    setItem('token', token as string);
    setItem('username', userName as string);
    router.push('/');
  };

  return (
    <>
      <Head title="Login" />
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
    </>
  );
};

export default Login;
