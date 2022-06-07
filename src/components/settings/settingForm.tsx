import React, { FC, useRef } from 'react';
import { useRouter } from 'next/router';
import { useUpdate } from '../../../hooks/realworld.hook';

const SettingsForm: FC = (props, ref) => {
  const router = useRouter();

  const { isLoading, updateUser } = useUpdate();

  const imageInput = useRef<HTMLInputElement>(null);
  const usernameInput = useRef<HTMLInputElement>(null);
  const bioInput = useRef<HTMLTextAreaElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const submitUpdate = async () => {
    const { data, status, error } = await updateUser({
      user: {
        email: emailInput.current?.value as string,
        password: passwordInput.current?.value as string,
        username: usernameInput.current?.value as string,
        image: imageInput.current?.value as string,
        bio: bioInput.current?.value as string,
      },
    });
    if (error) {
      alert(error);
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <form onSubmit={submitUpdate}>
        <fieldset>
          <fieldset className="form-group">
            <input className="form-control" type="text" placeholder="URL of profile picture" ref={imageInput} />
          </fieldset>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder="Your Name" ref={usernameInput} />
          </fieldset>
          <fieldset className="form-group">
            <textarea
              className="form-control form-control-lg"
              rows={8}
              placeholder="Short bio about you"
              ref={bioInput}
            />
          </fieldset>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder="Email" ref={emailInput} />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Password"
              autoComplete="false"
              ref={passwordInput}
            />
          </fieldset>
          <button className="btn btn-lg btn-primary pull-xs-right" disabled={isLoading} onClick={submitUpdate}>
            Update Settings
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default SettingsForm;
