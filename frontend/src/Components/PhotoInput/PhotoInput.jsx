import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Icon from '../Icon/Icon';
import { ICONS } from '../../Constants';
import './PhotoInput.css';

const photoInputCss = cn('photo-input');

function PhotoInput(props) {
  const { id, cls } = props;

  return (
    <div className={photoInputCss({}, [cls])}>
      <label htmlFor={photoInputCss(`input${id}`)}>
        <div className={photoInputCss('layer')}>
          <div className={photoInputCss('card')}>
            <Icon fill="grey" size="l" viewBox="0 0 315 315" icon={ICONS.ADD} />
            <span>Add photo</span>
          </div>
        </div>
        <input type="file" id={photoInputCss(`input${id}`)} />
      </label>
    </div>
  );
}

PhotoInput.propTypes = {
  cls: PropTypes.string,
  id: PropTypes.number.isRequired,
};

PhotoInput.defaultProps = {
  cls: null,
};

export default PhotoInput;
