import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { profileAction } from '../../Actions';

import { VALUES } from '../../Constants';

import PhotoProfile from '../PhotoProfile/PhotoProfile';
import Button from '../Button/Button';
import LoadingModal from '../LoadingModal/LoadingModal';
import Textarea from '../Textarea/Textarea';
import RadioGroup from '../RadioGroup/RadioGroup';
import RadioButton from '../RadioButton/RadioButton';
import './Profile.css';

const profileCss = cn('profile');

const profileSchema = {
  photo: {
    validate: (photo) => {
      let error;

      if (Object.values(photo.value).length !== VALUES.PHOTO_COUNT) {
        error = 'Requires 3 photos';
      }
      return { value: photo.value, error };
    },
  },
  about: {
    validate: (about) => {
      let error;

      console.log('abotut', about.value);
      if (!about.value) {
        error = 'Required field';
      } else if (about.value.length > 120) {
        error = 'Length must be lower 120';
      }

      return { value: about.value, error };
    },
  },
};

function Profile(props) {
  const { cls } = props;
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('render');
    dispatch(profileAction.getProfile(user.username));
  }, [dispatch, user]);

  function handleChangeAbout(event) {
    event.persist();

    const { value } = event.target;
    dispatch(profileAction.setAbout(value));
  }

  function handleChangeSex(event) {
    event.persist();

    const { value } = event.target;
    dispatch(profileAction.setData('sex', value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let isValid = true;
    const fields = Object.keys(profile);
    const errors = {};
    const data = fields.reduce((result, field) => {
      if (!profileSchema[field]) {
        return result;
      }

      const { value, error } = profileSchema[field].validate(profile[field]);
      if (error) {
        isValid = false;
        errors[field] = error;
      }
      console.log(value);
      return Object.assign(result, { [field]: value });
    }, {});

    if (isValid) {
      console.log('data', data);
      dispatch(profileAction.submit(data));
    } else {
      console.log('errors', errors);
      dispatch(profileAction.setError(errors));
    }
  }

  return (
    <form onSubmit={handleSubmit} className={profileCss({}, [cls])}>
      <PhotoProfile photos={profile.photo.value} error={profile.photo.error} />
      <RadioGroup
        name="sex"
        value={profile.sex.value}
        error={profile.sex.error}
        onChange={handleChangeSex}
      >
        <RadioButton value="male" label="Male" />
        <RadioButton value="female" label="Female" />
      </RadioGroup>
      <Textarea value={profile.about.value} error={profile.about.error} onChange={handleChangeAbout} cls={profileCss('textarea')} />
      <Button type="submit" cls={profileCss('submit')}>Save</Button>
      <LoadingModal isLoading={profile.isLoading} />
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
