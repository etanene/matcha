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
    photo,
  } = props;

  return (
    <div className={matchUserCss({}, [cls])}>
      <img src={`api/public/photo/${photo.name}`} alt="img" className={matchUserCss('img')} />
      <div userid={userId} className={matchUserCss('name')}>
        {value}
      </div>
    </div>

  );
}

MatchUser.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.number,
    order_id: PropTypes.number,
    name: PropTypes.string,
  }),
  cls: PropTypes.string,
  userId: PropTypes.number,
  value: PropTypes.string,
};

MatchUser.defaultProps = {
  photo: {},
  cls: '',
  userId: null,
  value: '',
};

export default MatchUser;
