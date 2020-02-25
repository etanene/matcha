import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { useDispatch } from 'react-redux';

import { profileAction } from '../../Actions';

import CloseButton from '../common/CloseButton/CloseButton';
import Icon from '../common/Icon/Icon';
import { ICONS } from '../../Constants';
import './PhotoInput.css';

const photoInputCss = cn('photo-input');

function PhotoInput(props) {
  const {
    id,
    photo,
    cls,
    error,
  } = props;

  const [file, setFile] = useState(photo && photo.src);
  useEffect(() => {
    setFile(photo.src);
  }, [photo.src]);

  const dispatch = useDispatch();

  function handleChange(event) {
    const reader = new FileReader();
    const inputFile = event.target.files[0];

    reader.onloadend = () => {
      setFile(reader.result);
      dispatch(profileAction.addPhoto(id, reader.result));
    };
    reader.readAsDataURL(inputFile);
  }

  function handleDelete() {
    setFile(null);
    dispatch(profileAction.delPhoto(id));
  }

  const content = file ? (
    <div className={photoInputCss('photo')}>
      <CloseButton onClick={handleDelete} cls={photoInputCss('close-button')} />
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
    <div className={photoInputCss({ error: !file && error }, [cls])}>
      <label htmlFor={photoInputCss(`input${id}`)}>
        <div className={photoInputCss('layer')}>
          {content}
        </div>
      </label>
    </div>
  );
}

PhotoInput.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
  }),
  cls: PropTypes.string,
  id: PropTypes.number.isRequired,
  error: PropTypes.bool,
};

PhotoInput.defaultProps = {
  photo: {},
  cls: null,
  error: false,
};

export default PhotoInput;
