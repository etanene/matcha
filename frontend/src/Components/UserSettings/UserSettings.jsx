import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

// import { useForm } from '../../Hooks';

import './UserSettings.css';
import ChangeUserPwForm from '../ChangeUserPwForm/ChangeUserPwForm';
import ChangeUserEmail from '../ChangeUserEmail/ChangeUserEmail';

const userSettingsCss = cn('user-settings');

function UserSettings(props) {
  const { cls } = props;
  return (
    <div className={userSettingsCss({}, [cls])}>
      <ChangeUserPwForm cls={userSettingsCss('change-password')} />
      <ChangeUserEmail cls={userSettingsCss('change-email')} />
    </div>
  );
}

UserSettings.propTypes = {
  cls: PropTypes.string,
};

UserSettings.defaultProps = {
  cls: null,
};

export default UserSettings;
