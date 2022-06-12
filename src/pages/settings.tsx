import React, { useContext } from 'react';
import SettingsForm from '../components/settings/settingForm';
import { useRouter } from 'next/router';
import { removeItem, getItem } from '../commons/localStorage';
import { UserContext } from '../contexts/userContext';

const Settings = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const submitLogout = async () => {
    const user = getItem(`user`);
    if (!user) return;
    await removeItem(`user`);
    setUser(false);
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

              <SettingsForm />
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
