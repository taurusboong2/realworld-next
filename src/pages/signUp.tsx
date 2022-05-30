import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import MyLink from '../components/MyLink';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import { api } from '../../config/api';
import BInput from '../components/BInput';
import BFieldset from '../components/BFieldset';

const SignUp: NextPage = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const userNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

  const signUpSubmit = async () => {
    setLoading(true);
    await api
      .post(`/users`, {
        // network 함수로 다 분리하기
        // 제네릭으로 response 타입 선언해주기
        user: {
          username: userNameInputRef.current?.value as string,
          email: emailInputRef.current?.value as string,
          password: passWordInputRef.current?.value as string | number,
        },
      })
      .then(res => {
        // async await 문법이면 .then catch 하지 말고 try catch
        console.log(res.data);
        console.log(res.config);
        console.log(res.status);
      })
      .catch(error => {
        // async await 문법이면 .then catch 하지 말고 try catch
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
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <MyLink href="/login">Have an account?</MyLink>
              </p>

              <form onSubmit={signUpSubmit}>
                <fieldset>
                  <BFieldset>
                    <BInput type="text" placeholder="Username" ref={userNameInputRef} />
                  </BFieldset>

                  <BFieldset>
                    <BInput type="email" placeholder="Email" ref={emailInputRef} />
                  </BFieldset>

                  <BFieldset>
                    <BInput type="password" placeholder="Password" ref={passWordInputRef} />
                  </BFieldset>
                  <button
                    // 버튼 직접 분리하기
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
    </Wrap>
  );
};

export default SignUp;

const Wrap = styled.div``;
