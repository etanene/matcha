import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './NextButton.css';

const nextButtonCss = cn('next-button');

function NextButton(props) {
  const {
    reverse,
    cls,

    onClick,
  } = props;

  return (
    <div role="button" aria-hidden onClick={onClick} onKeyPress={onClick} className={nextButtonCss({}, [cls])}>
      {reverse ? (
        <span className={nextButtonCss('icon')}>&#8249;</span>
      ) : (
        <span className={nextButtonCss('icon')}>&#8250;</span>
      )}
    </div>
  );
}

NextButton.propTypes = {
  reverse: PropTypes.bool,
  cls: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

NextButton.defaultProps = {
  reverse: false,
  cls: '',
};

export default NextButton;
