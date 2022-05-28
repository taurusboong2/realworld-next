import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MyLink from '../components/MyLink';
import NavBar from '../components/NavBar';

const Login: NextPage = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

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
                    placeholder="Password"
                    ref={passWordInputRef}
                  />
                </fieldset>

                <button className="btn btn-lg btn-primary pull-xs-right" type="submit" disabled={isLoading}>
                  Sign in
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Login;

const Wrap = styled.div``;
