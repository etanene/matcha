import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import CloseButton from '../CloseButton/CloseButton';
import './Tag.css';

const tagCss = cn('tag');

function Tag(props) {
  const { onDelete, children, cls } = props;

  return (
    <div className={tagCss({}, [cls])}>
      <CloseButton onClick={onDelete} cls={tagCss('close-button')}> </CloseButton>
      {`#${children}`}
    </div>
  );
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  cls: PropTypes.string,
  onDelete: PropTypes.func,
};

Tag.defaultProps = {
  cls: '',
  onDelete: null,
};

export default Tag;
