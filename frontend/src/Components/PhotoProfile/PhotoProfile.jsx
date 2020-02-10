import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import { VALUES } from '../../Constants';

import PhotoInput from '../PhotoInput/PhotoInput';
import './PhotoProfile.css';

const photoProfileCss = cn('photo-profile');
const photoInputCss = photoProfileCss('photo-input');

function PhotoProfile(props) {
  const { photos, error, cls } = props;

  const photoInputs = [];
  for (let i = 0; i < VALUES.PHOTO_COUNT; i += 1) {
    photoInputs.push(<PhotoInput
      key={i}
      photo={photos[i]}
      error={Boolean(error)}
      id={i}
      cls={photoInputCss}
    />);
  }

  return (
    <div className={photoProfileCss({}, [cls])}>
      {photoInputs}
    </div>
  );
}

PhotoProfile.propTypes = {
  photos: PropTypes.objectOf(PropTypes.object),
  error: PropTypes.string,
  cls: PropTypes.string,
};

PhotoProfile.defaultProps = {
  photos: {},
  error: '',
  cls: null,
};

export default PhotoProfile;
