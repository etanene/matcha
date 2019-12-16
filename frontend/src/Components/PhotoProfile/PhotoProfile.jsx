import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import PhotoInput from '../PhotoInput/PhotoInput';
import './PhotoProfile.css';

const photoProfileCss = cn('photo-profile');

function PhotoProfile(props) {
  const { cls } = props;

  return (
    <div className={photoProfileCss({}, [cls])}>
      <PhotoInput />
    </div>
  );
}

PhotoProfile.propTypes = {
  cls: PropTypes.string,
};

PhotoProfile.defaultProps = {
  cls: null,
};

export default PhotoProfile;
