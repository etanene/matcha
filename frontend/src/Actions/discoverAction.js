const DISCOVER_GET_USERS = 'DISCOVER_GET_USERS';
function getUsers(payload) {
  return { type: DISCOVER_GET_USERS, payload };
}

const DISCOVER_SAVE_USERS = 'DISCOVER_SAVE_USERS';
function saveUsers(users) {
  return { type: DISCOVER_SAVE_USERS, payload: users };
}

const DISCOVER_SET_LOADING = 'DISCOVER_SET_LOADING';
function setLoading(loading) {
  return { type: DISCOVER_SET_LOADING, payload: loading };
}

const DISCOVER_LIKE = 'DISCOVER_LIKE';
function like(payload) {
  return { type: DISCOVER_LIKE, payload };
}

export default {
  DISCOVER_GET_USERS,
  getUsers,
  DISCOVER_SAVE_USERS,
  saveUsers,
  DISCOVER_SET_LOADING,
  setLoading,
  DISCOVER_LIKE,
  like,
};
