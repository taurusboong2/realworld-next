import React from 'react';
import SettingsForm from '../components/Setting/SettingForm';
import { useLogout } from '../hooks/auth.hook';
import WithLogin from '../components/Auth/WithLogin';

const Settings = () => {
  const { logoutUser } = useLogout();

  const submitLogout = async () => {
    await logoutUser();
    window.location.reload();
    alert('로그아웃이 성공적으로 진행되었습니다.');
  };

  return (
    <WithLogin>
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
    </WithLogin>
  );
};

export default Settings;
