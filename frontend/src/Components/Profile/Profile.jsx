import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { profileAction } from '../../Actions';

import PhotoProfile from '../PhotoProfile/PhotoProfile';
import Button from '../Button/Button';
import './Profile.css';

const profileCss = cn('profile');

const profileSchema = {
  photo: {
    validate: (photo) => {
      let error;

      if (Object.values(photo.value).length !== 3) {
        error = 'Requires 3 photos';
      }
      return { value: photo.value, error };
    },
  },
};

function Profile(props) {
  const { cls } = props;
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    let isValid = true;
    const fields = Object.keys(profile);
    const errors = {};
    const data = fields.reduce((result, field) => {
      if (!profileSchema[field]) {
        return {};
      }

      const { value, error } = profileSchema[field].validate(profile[field]);
      if (error) {
        isValid = false;
        errors[field] = error;
      }
      return Object.assign(result, value);
    }, {});

    if (isValid) {
      console.log('data', data);
    } else {
      console.log('errors', errors);
      dispatch(profileAction.setError(errors));
    }
  }

  return (
    <form onSubmit={handleSubmit} className={profileCss({}, [cls])}>
      <PhotoProfile error={profile.photo.error} />
      <Button type="submit" cls={profileCss('submit')}>Save</Button>
    </form>
  );
}

Profile.propTypes = {
  cls: PropTypes.string,
};

Profile.defaultProps = {
  cls: null,
};

export default Profile;
