import React from 'react';

const SettingsForm = ({ userData }) => {
  const { image, name, bio } = userData;
  return (
    <>
      <form>
        <fieldset>
          <fieldset className="form-group">
            <input className="form-control" type="text" placeholder="URL of profile picture" />
          </fieldset>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder={name} />
          </fieldset>
          <fieldset className="form-group">
            <textarea className="form-control form-control-lg" rows={8} placeholder={bio} />
          </fieldset>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder="Email" />
          </fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="password"
              placeholder="Password"
              autoComplete="false"
            />
          </fieldset>
          <button className="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
        </fieldset>
      </form>
    </>
  );
};

export default SettingsForm;
