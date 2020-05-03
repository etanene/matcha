import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import PhotoCard from '../common/PhotoCard/PhotoCard';
import NextButton from '../common/NextButton/NextButton';
import './PhotoSlider.css';

const photoSliderCss = cn('photo-slider');

function PhotoSlider(props) {
  const { photos, cls } = props;
  const [currentPhoto, setCurrentPhoto] = useState(0);

  function handleNextPhoto() {
    setCurrentPhoto((currentPhoto + 1) % photos.length);
  }

  function handlePrevPhoto() {
    if (currentPhoto === 0) {
      setCurrentPhoto(photos.length - 1);
    } else {
      setCurrentPhoto(currentPhoto - 1);
    }
  }

  return (
    <div className={photoSliderCss({}, [cls])}>
      <NextButton reverse onClick={handlePrevPhoto} />
      <PhotoCard photo={photos[currentPhoto]} cls={photoSliderCss('photo-card')} />
      <NextButton onClick={handleNextPhoto} />
    </div>
  );
}

PhotoSlider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  cls: PropTypes.string,
};

PhotoSlider.defaultProps = {
  photos: [],
  cls: '',
};

export default PhotoSlider;
