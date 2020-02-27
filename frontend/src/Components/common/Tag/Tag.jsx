import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import CloseButton from '../CloseButton/CloseButton';
import './Tag.css';

const tagCss = cn('tag');

function Tag(props) {
  const {
    onDelete,
    isDeleted,
    children,
    cls,
  } = props;

  return (
    <div className={tagCss({}, [cls])}>
      {isDeleted && <CloseButton onClick={onDelete} cls={tagCss('close-button')} />}
      {`#${children}`}
    </div>
  );
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  isDeleted: PropTypes.bool,
  cls: PropTypes.string,
  onDelete: PropTypes.func,
};

Tag.defaultProps = {
  isDeleted: false,
  cls: '',
  onDelete: null,
};

export default Tag;
