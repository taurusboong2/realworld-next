import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import MyLink from '../components/MyLink';

const SignUp: NextPage = () => {
  const [isLoading, setLoading] = useState(false);

  const userNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passWordInputRef = useRef<HTMLInputElement>(null);

  const changeUserName = e => {};

  return (
    <Wrap>
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

                <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
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
