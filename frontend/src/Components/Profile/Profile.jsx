import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import PhotoProfile from '../PhotoProfile/PhotoProfile';
import './Profile.css';

const profileCss = cn('profile');

function Profile(props) {
  const { cls } = props;

  return (
    <div className={profileCss({}, [cls])}>
      <PhotoProfile />
    </div>
  );
}

Profile.propTypes = {
  cls: PropTypes.string,
};

Profile.defaultProps = {
  cls: null,
};

export default Profile;
