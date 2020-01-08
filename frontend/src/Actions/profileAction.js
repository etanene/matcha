const PROFILE_PHOTO_ADD = 'PROFILE_PHOTO_ADD';
const PROFILE_SET_ERROR = 'PROFILE_SET_ERROR';
const PROFILE_SET_LOADING = 'PROFILE_SET_LOADING';
const PROFILE_SUBMIT_REQUEST = 'PROFILE_SUBMIT_REQUEST';

function addPhoto(id, src) {
  return { type: PROFILE_PHOTO_ADD, payload: { id, src } };
}

function setError(error) {
  return { type: PROFILE_SET_ERROR, payload: error };
}

function setLoading(isLoading) {
  return { type: PROFILE_SET_LOADING, payload: isLoading };
}

function submit(data) {
  return { type: PROFILE_SUBMIT_REQUEST, payload: data };
}

export default {
  PROFILE_PHOTO_ADD,
  addPhoto,
  PROFILE_SET_ERROR,
  setError,
  PROFILE_SET_LOADING,
  setLoading,
  PROFILE_SUBMIT_REQUEST,
  submit,
};
