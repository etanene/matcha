import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { profileAction } from '../../Actions';

import { VALUES } from '../../Constants';

import PhotoProfile from '../PhotoProfile/PhotoProfile';
import Button from '../common/Button/Button';
import LoadingModal from '../LoadingModal/LoadingModal';
import Textarea from '../common/Textarea/Textarea';
import RadioGroup from '../common/RadioGroup/RadioGroup';
import RadioButton from '../common/RadioButton/RadioButton';
import TagsInput from '../TagsInput/TagsInput';
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
  sex: {
    validate: (sex) => {
      let error;

      if (!sex.value) {
        error = 'Required field';
      }

      return { value: sex.value, error };
    },
  },
  orientation: {
    validate: (orientation) => {
      let error;

      if (!orientation.value) {
        error = 'Required field';
      }

      return { value: orientation.value, error };
    },
  },
  about: {
    validate: (about) => {
      let error;

      if (!about.value) {
        error = 'Required field';
      } else if (about.value.length > 120) {
        error = 'Length must be lower 120';
      }

      return { value: about.value, error };
    },
  },
  tags: {
    validate: (tags) => {
      let error;

      if (!tags.value.length) {
        error = 'Required field';
      }

      return { value: tags.value, error };
    },
  },
};

function Profile(props) {
  const { cls } = props;
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileAction.getProfile(user.username));
  }, [dispatch, user]);

  function handleChange(field) {
    return (event) => {
      event.persist();

      const { value } = event.target;
      dispatch(profileAction.setData(field, value));
    };
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
      return Object.assign(result, { [field]: value });
    }, {});

    if (isValid) {
      dispatch(profileAction.submit(data));
    } else {
      dispatch(profileAction.setError(errors));
    }
  }

  return (
    <form onSubmit={handleSubmit} className={profileCss({}, [cls])}>
      <PhotoProfile photos={profile.photo.value} error={profile.photo.error} />
      <RadioGroup
        title="SEX"
        name="sex"
        value={profile.sex.value}
        error={profile.sex.error}
        onChange={handleChange('sex')}
      >
        <RadioButton value="male" label="Male" />
        <RadioButton value="female" label="Female" />
      </RadioGroup>
      <RadioGroup
        title="ORIENTATION"
        name="orientation"
        value={profile.orientation.value}
        error={profile.orientation.error}
        onChange={handleChange('orientation')}
      >
        <RadioButton value="homo" label="Homo" />
        <RadioButton value="hetero" label="Hetero" />
        <RadioButton value="bi" label="Bi" />
      </RadioGroup>
      <TagsInput tags={profile.tags.value} title="TAGS" cls={profileCss('tags-input')} />
      <Textarea value={profile.about.value} error={profile.about.error} onChange={handleChange('about')} cls={profileCss('textarea')} />
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
