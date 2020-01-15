const PROFILE_PHOTO_ADD = 'PROFILE_PHOTO_ADD';
function addPhoto(id, src) {
  return { type: PROFILE_PHOTO_ADD, payload: { id, src } };
}

const PROFILE_SET_ERROR = 'PROFILE_SET_ERROR';
function setError(error) {
  return { type: PROFILE_SET_ERROR, payload: error };
}

const PROFILE_SET_LOADING = 'PROFILE_SET_LOADING';
function setLoading(isLoading) {
  return { type: PROFILE_SET_LOADING, payload: isLoading };
}

const PROFILE_SUBMIT_REQUEST = 'PROFILE_SUBMIT_REQUEST';
function submit(data) {
  return { type: PROFILE_SUBMIT_REQUEST, payload: data };
}

const PROFILE_RESET_CHANGE_PHOTO = 'PROFILE_RESET_CHANGE_PHOTO';
function resetChangePhoto() {
  return { type: PROFILE_RESET_CHANGE_PHOTO };
}

const PROFILE_GET = 'PROFILE_GET';
function getProfile(login) {
  return { type: PROFILE_GET, payload: login };
}

const PROFILE_SAVE = 'PROFILE_SAVE';
function saveProfile(profile) {
  return { type: PROFILE_SAVE, payload: profile };
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
  PROFILE_RESET_CHANGE_PHOTO,
  resetChangePhoto,
  PROFILE_GET,
  getProfile,
  PROFILE_SAVE,
  saveProfile,
};
