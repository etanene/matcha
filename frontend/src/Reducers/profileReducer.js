import { profileAction } from '../Actions';

function addPhoto(state, photo) {
  return {
    ...state,
    photo: {
      ...state.photo,
      value: {
        ...state.photo.value,
        [photo.id]: { ...photo },
      },
    },
  };
}

function setError(state, errors) {
  const fields = Object.keys(errors);

  const newState = fields.reduce((result, field) => {
    const current = {
      ...state,
      [field]: {
        ...state[field],
        error: errors[field],
      },
    };
    return Object.assign(result, current);
  }, {});

  return newState;
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
