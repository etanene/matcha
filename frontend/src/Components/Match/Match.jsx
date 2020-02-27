import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';

import { discoverAction } from '../../Actions';

import Preview from '../Preview/Preview';
import LoadingModal from '../LoadingModal/LoadingModal';
import './Match.css';

const matchCss = cn('match');

function Match(props) {
  const { cls } = props;
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user.user);
  const discover = useSelector((state) => state.discover);
  const discoverUsers = discover.users;
  console.log('discover match', discover);

  const [userInd, setUserInd] = useState(0);
  function handleLike(targetUserId, type) {
    return () => {
      dispatch(discoverAction.like({ from: user.username, to: targetUserId, type }));
      setUserInd(userInd + 1);
    };
  }

  useEffect(() => {
    const { sex, orientation } = profile;
    dispatch(discoverAction.getUsers({
      sex: sex.value,
      orientation: orientation.value,
      login: user.username,
    }));
  }, [profile, dispatch, user]);

  return (
    <div className={matchCss({}, [cls])}>
      {discoverUsers[userInd] ? (
        <Preview onLike={handleLike} discover={discoverUsers[userInd]} cls={matchCss('preview')} />
      ) : (
        <div>davai potom</div>
      )}
      <LoadingModal isLoading={discover.loading} />
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
