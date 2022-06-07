import React, { useState, useEffect, useRef } from 'react';
import SettingsForm from '../components/settings/settingForm';
import { useRouter } from 'next/router';
import { removeItem, getItem } from '../../common/localStorage';

const Settings = () => {
  const router = useRouter();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [bio, setBio] = useState();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const user = getItem('user');
    const parsedUser = JSON.parse(user as string);
    setImage(parsedUser.image);
    setName(parsedUser.username);
    setBio(parsedUser.bio);
    console.log(name);
  }, []);

  const submitLogout = async () => {
    const user = getItem(`user`);
    if (!user) return;
    await removeItem(`user`);
    router.push(`/`);
  };

  return (
    <>
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center" style={{ fontSize: '2rem' }}>
                Your Settings
              </h1>

              <SettingsForm userData={{ image, name, bio }} />
              <hr />
              <button className="btn btn-outline-danger" onClick={submitLogout}>
                Or click here to logout.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
