import { profileAction } from '../Actions';

function addPhoto(state, photo) {
  return {
    ...state,
    photo: [
      ...state.photo.slice(0, photo.id),
      { ...photo },
      ...state.photo.slice(photo.id + 1),
    ],
  };
}

const initialState = {
  photo: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileAction.PROFILE_PHOTO_ADD:
      return addPhoto(state, action.payload);
    default:
      return state;
  }
};

export default profileReducer;
