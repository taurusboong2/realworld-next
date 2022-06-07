import React from 'react';
import SettingsForm from '../components/settings/settingForm';
import { useRouter } from 'next/router';
import { removeItem, getItem } from '../../common/localStorage';

const Settings = () => {
  const router = useRouter();

  const submitLogout = async e => {
    e.preventDefault();
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

              <SettingsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
