import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Icon from '../Icon/Icon';
import { ICONS } from '../../Constants';
import './PhotoInput.css';

const photoInputCss = cn('photo-input');

function PhotoInput(props) {
  const { id, cls } = props;
  const [file, setFile] = useState();

  function handleChange(event) {
    const reader = new FileReader();
    const inputFile = event.target.files[0];

    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(inputFile);
  }

  console.log(file);
  const content = file ? (
    <div className={photoInputCss('photo')}>
      <img src={file} alt="img" className={photoInputCss('img')} />
    </div>
  ) : (
    <div className={photoInputCss('card')}>
      <Icon fill="grey" size="l" viewBox="0 0 315 315" icon={ICONS.ADD} />
      <span>Add photo</span>
      <input type="file" onChange={handleChange} id={photoInputCss(`input${id}`)} className={photoInputCss('input')} />
    </div>
  );

  return (
    <div className={photoInputCss({}, [cls])}>
      <label htmlFor={photoInputCss(`input${id}`)}>
        <div className={photoInputCss('layer')}>
          {content}
        </div>
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
