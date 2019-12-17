import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import PhotoInput from '../PhotoInput/PhotoInput';
import './PhotoProfile.css';

const photoProfileCss = cn('photo-profile');
const photoInputCss = photoProfileCss('photo-input');

function PhotoProfile(props) {
  const { cls } = props;

  return (
    <div className={photoProfileCss({}, [cls])}>
      <PhotoInput id={1} cls={photoInputCss} />
      <PhotoInput id={2} cls={photoInputCss} />
      <PhotoInput id={3} cls={photoInputCss} />
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
