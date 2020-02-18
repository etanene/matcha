import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './PhotoCard.css';

const photoCardCss = cn('photo-card');

function PhotoCard(props) {
  const { photo, cls } = props;

  return (
    <div className={photoCardCss({}, [cls])}>
      <div className={photoCardCss('layer')}>
        <div className={photoCardCss('container')}>
          <img src={photo.src} alt="img" className={photoCardCss('img')} />
        </div>
      </div>
    </div>
  );
}

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number,
    order_id: PropTypes.number,
    src: PropTypes.string,
  }),
  cls: PropTypes.string,
};

PhotoCard.defaultProps = {
  photo: {},
  cls: '',
};

export default PhotoCard;
