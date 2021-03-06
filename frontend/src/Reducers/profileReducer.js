import { profileAction } from '../Actions';

function addPhoto(state, photo) {
  return {
    ...state,
    photo: {
      ...state.photo,
      value: {
        ...state.photo.value,
        [photo.id]: {
          ...photo,
          isChanged: true,
        },
      },
    },
  };
}

function delPhoto(state, photo) {
  const changedValue = { ...state.photo.value };
  delete changedValue[photo.id];
  return {
    ...state,
    photo: {
      ...state.photo,
      value: changedValue,
    },
  };
}

function resetChangePhoto(state) {
  const newValue = Object.keys(state.photo.value).reduce((result, id) => ({
    ...result,
    [id]: {
      ...state.photo.value[id],
      isChanged: false,
    },
  }), {});

  return {
    ...state,
    photo: {
      ...state.photo,
      value: newValue,
    },
  };
}

function saveProfile(state, profile) {
  const {
    photos,
    sex,
    orientation,
    about,
    tags,
    firstName,
    lastName,
  } = profile;

  const newPhotos = photos.reduce((result, photo) => ({
    ...result,
    [photo.order_id]: {
      id: photo.order_id,
      src: `api/public/photo/${photo.name}`,
    },
  }), {});
  return {
    ...state,
    photo: {
      ...state.photo,
      value: newPhotos,
    },
    sex: {
      ...state.sex,
      value: sex,
    },
    orientation: {
      ...state.orientation,
      value: orientation,
    },
    about: {
      ...state.about,
      value: about,
    },
    tags: {
      ...state.tags,
      value: tags.map((tag) => (tag.tag_value)),
    },
    firstName: {
      ...state.firstName,
      value: firstName,
    },
    lastName: {
      ...state.lastName,
      value: lastName,
    },
  };
}

function setError(state, errors) {
  const newFields = Object.keys(errors).reduce((result, field) => ({
    ...result,
    [field]: {
      ...state[field],
      error: errors[field],
    },
  }), {});

  return {
    ...state,
    ...newFields,
  };
}

const initialState = {
  photo: {
    value: {},
    error: '',
  },
  sex: {
    value: 'male',
    error: '',
  },
  orientation: {
    value: 'hetero',
    error: '',
  },
  about: {
    value: '',
    error: '',
  },
  tags: {
    value: [],
    error: '',
  },
  position: {
    value: {},
    error: '',
  },
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case profileAction.PROFILE_PHOTO_ADD:
      return addPhoto(state, payload);
    case profileAction.PROFILE_PHOTO_DEL:
      return delPhoto(state, payload);
    case profileAction.PROFILE_RESET_CHANGE_PHOTO:
      return resetChangePhoto(state);
    case profileAction.PROFILE_SAVE:
      return saveProfile(state, payload);
    case profileAction.PROFILE_SET_DATA:
      return {
        ...state,
        [payload.field]: {
          error: '',
          value: payload.value,
        },
      };
    case profileAction.PROFILE_SET_ERROR:
      return setError(state, payload);
    case profileAction.PROFILE_SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
