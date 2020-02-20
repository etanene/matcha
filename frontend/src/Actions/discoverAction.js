const DISCOVER_GET_USERS = 'DISCOVER_GET_USERS';
function getUsers() {
  return { type: DISCOVER_GET_USERS };
}

const DISCOVER_SAVE_USERS = 'DISCOVER_SAVE_USERS';
function saveUsers(users) {
  return { type: DISCOVER_SAVE_USERS, payload: users };
}

const DISCOVER_SET_LOADING = 'DISCOVER_SET_LOADING';
function setLoading(loading) {
  return { type: DISCOVER_SET_LOADING, payload: loading };
}

export default {
  DISCOVER_GET_USERS,
  getUsers,
  DISCOVER_SAVE_USERS,
  saveUsers,
  DISCOVER_SET_LOADING,
  setLoading,
};
