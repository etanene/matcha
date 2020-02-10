import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import PhotoSlider from '../PhotoSlider/PhotoSlider';

const previewCss = cn('preview');

function Preview(props) {
  const { cls } = props;

  return (
    <div className={previewCss({}, [cls])}>
      <PhotoSlider />
    </div>
  );
}

Preview.propTypes = {
  cls: PropTypes.string,
};

Preview.defaultProps = {
  cls: '',
};

export default Preview;
