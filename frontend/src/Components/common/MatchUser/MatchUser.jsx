import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './MatchUser.css';

const matchUserCss = cn('matchuser');

function MatchUser(props) {
  const {
    cls,
    value,
    userId,
  } = props;

  return (
    <div userid={userId} className={matchUserCss({}, [cls])}>
      {value}
    </div>
  );
}

MatchUser.propTypes = {
  cls: PropTypes.string,
  userId: PropTypes.number,
  value: PropTypes.string,
};

MatchUser.defaultProps = {
  cls: '',
  userId: null,
  value: '',
};

export default MatchUser;
