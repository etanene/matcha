import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

const photoSliderCss = cn('photo-slider');

function PhotoSlider(props) {
  const { cls } = props;

  return (
    <div className={photoSliderCss({}, [cls])}>
      slider
    </div>
  );
}

PhotoSlider.propTypes = {
  cls: PropTypes.string,
};

PhotoSlider.defaultProps = {
  cls: '',
};

export default PhotoSlider;
