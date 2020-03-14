import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './MatchList.css';

const matchListCss = cn('match-list');

function MatchList(props) {
  const {
    children,
  } = props;

  return (
    <div className={matchListCss()}>
      {children}
    </div>
  );
}

MatchList.propTypes = {
  children: PropTypes.node,
};

MatchList.defaultProps = {
  children: null,
};

export default MatchList;
