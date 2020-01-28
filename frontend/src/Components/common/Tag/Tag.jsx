import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

const tagCss = cn('tag');

function Tag(props) {
  const { children, cls } = props;

  return (
    <div className={tagCss({}, [cls])}>
      {children}
    </div>
  );
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  cls: PropTypes.string,
};

Tag.defaultProps = {
  cls: '',
};

export default Tag;
