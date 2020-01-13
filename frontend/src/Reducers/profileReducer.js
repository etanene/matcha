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
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileAction.PROFILE_PHOTO_ADD:
      return addPhoto(state, action.payload);
    case profileAction.PROFILE_RESET_CHANGE_PHOTO:
      return resetChangePhoto(state);
    case profileAction.PROFILE_SET_ERROR:
      return setError(state, action.payload);
    case profileAction.PROFILE_SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
