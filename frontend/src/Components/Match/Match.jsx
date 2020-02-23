import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';

import { discoverAction } from '../../Actions';

import Preview from '../Preview/Preview';
import LoadingModal from '../LoadingModal/LoadingModal';
import './Match.css';

const matchCss = cn('match');

// const discover = {
//   firsName: 'sanya',
//   lastName: 'loh',
//   photos: [
//     {
//       id: 0,
//       order_id: 0,
//       src: 'api/public/photo/617e8a83-acdc-4aa2-b4d3-47cfda9d9355',
//     },
//     {
//       id: 1,
//       order_id: 1,
//       src: 'api/public/photo/c7375790-94a8-429b-ad1c-0f7155b89390',
//     },
//     {
//       id: 2,
//       order_id: 2,
//       src: 'api/public/photo/cbd93a04-b7d3-42f1-ba64-11df34efb4c6',
//     },
//   ],
//   tags: [
//     {
//       id: 0,
//       value: 'kogda',
//     },
//     {
//       id: 1,
//       value: 'sdelaesh',
//     },
//     {
//       id: 2,
//       value: 'udalenie',
//     },
//   ],
//   about: 'opyat otmazku napishesh? A? a? a? a?',
// };

function Match(props) {
  const { cls } = props;
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user.user);
  const discover = useSelector((state) => state.discover);
  const discoverUsers = discover.users;

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
  }, [profile, dispatch]);

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
