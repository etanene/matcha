import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { useDispatch } from 'react-redux';

import { discoverAction } from '../../Actions';

import Preview from '../Preview/Preview';
import './Match.css';

const matchCss = cn('match');

function Match(props) {
  const { cls } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(discoverAction.getUsers());
  });

  return (
    <div className={matchCss({}, [cls])}>
      <Preview cls={matchCss('preview')} />
    </div>
  );
}

Match.propTypes = {
  cls: PropTypes.string,
};

Match.defaultProps = {
  cls: '',
};

export default Match;
