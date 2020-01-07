import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import PhotoInput from '../PhotoInput/PhotoInput';
import './PhotoProfile.css';

const photoProfileCss = cn('photo-profile');
const photoInputCss = photoProfileCss('photo-input');

function PhotoProfile(props) {
  const { error, cls } = props;

  return (
    <div className={photoProfileCss({}, [cls])}>
      <PhotoInput error={Boolean(error)} id={0} cls={photoInputCss} />
      <PhotoInput error={Boolean(error)} id={1} cls={photoInputCss} />
      <PhotoInput error={Boolean(error)} id={2} cls={photoInputCss} />
    </div>
  );
}

PhotoProfile.propTypes = {
  error: PropTypes.string,
  cls: PropTypes.string,
};

PhotoProfile.defaultProps = {
  error: '',
  cls: null,
};

export default PhotoProfile;
