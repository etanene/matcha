const PROFILE_PHOTO_ADD = 'PROFILE_PHOTO_ADD';
const PROFILE_SET_ERROR = 'PROFILE_SET_ERROR';

function addPhoto(id, src) {
  return { type: PROFILE_PHOTO_ADD, payload: { id, src } };
}

function setError(error) {
  return { type: PROFILE_SET_ERROR, payload: error };
}

export default {
  PROFILE_PHOTO_ADD,
  addPhoto,
  PROFILE_SET_ERROR,
  setError,
};
