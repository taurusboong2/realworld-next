import React, { useRef } from 'react';
import { NextPage } from 'next';
import MyLink from '../components/NavBar/MyLink';
import { useRouter } from 'next/router';
import Head from '../components/myHead/index';
import { useSignUp } from '../hooks/auth.hook';

const SignUp: NextPage = () => {
  const router = useRouter();

  const userNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

  const { createSignUp, isLoading } = useSignUp();

  const signUpSubmit = async () => {
    const { data, status, error } = await createSignUp({
      user: {
        username: userNameInputRef.current?.value as string,
        email: emailInputRef.current?.value as string,
        password: passWordInputRef.current?.value as string,
      },
    });
    console.log(`send data: `, data);
    console.log(status === 200 ? '회원가입 성공' : '회원가입 실패');
    if (error) {
      alert(error);
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <Head title="Register" />
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <MyLink href="/login">Have an account?</MyLink>
              </p>

              <form onSubmit={signUpSubmit}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      ref={userNameInputRef}
                    />
                  </fieldset>

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
                      placeholder="Password"
                      autoComplete="true"
                      ref={passWordInputRef}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    onClick={signUpSubmit}
                    disabled={isLoading}>
                    Sign up
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

export default SignUp;
