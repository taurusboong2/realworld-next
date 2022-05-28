import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import MyLink from '../components/MyLink';
import axios from 'axios';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';

const SignUp: NextPage = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const userNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

  const signUpSubmit = async () => {
    const api = 'https://boong-realworld-api.herokuapp.com/api/users';
    setLoading(true);
    await axios
      .post(api, {
        user: {
          username: userNameInputRef.current?.value as string,
          email: emailInputRef.current?.value as string,
          password: passWordInputRef.current?.value as string | number,
        },
      })
      .then(res => {
        console.log(res.data);
        console.log(res.config);
        console.log(res.status);
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        console.log(error.config);
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
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default SignUp;

const Wrap = styled.div``;
