import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import PhotoProfile from '../PhotoProfile/PhotoProfile';
import Button from '../Button/Button';
import './Profile.css';

const profileCss = cn('profile');

function Profile(props) {
  const { cls } = props;

  return (
    <form className={profileCss({}, [cls])}>
      <PhotoProfile />
      <Button cls={profileCss('submit')}>Save</Button>
    </form>
  );
}

Profile.propTypes = {
  cls: PropTypes.string,
};

Profile.defaultProps = {
  cls: null,
};

export default Profile;
