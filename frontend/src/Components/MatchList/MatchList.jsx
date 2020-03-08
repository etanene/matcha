import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './MatchList.css';

const matchListCss = cn('match-list');

function MatchList(props) {
  const { onClick, list } = props;

  console.log('list', list);

  return (
    <div className={matchListCss()}>
      <div role="button" aria-hidden className={matchListCss('user')} onClick={onClick}>
        Hello
      </div>
    </div>
  );
}

MatchList.propTypes = {
  list: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.object),
    tags: PropTypes.arrayOf(PropTypes.object),
    info: PropTypes.string,
    userId: PropTypes.number,
  }),
  onClick: PropTypes.func,
};

MatchList.defaultProps = {
  list: {},
  onClick: null,
};

export default MatchList;
