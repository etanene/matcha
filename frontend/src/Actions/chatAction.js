const CHAT_GET_USERS = 'CHAT_GET_USERS';
function getUsers(payload) {
  return { type: CHAT_GET_USERS, payload };
}

const CHAT_SAVE_USERS = 'CHAT_SAVE_USERS';
function saveUsers(users) {
  return { type: CHAT_SAVE_USERS, payload: users };
}

export default {
  CHAT_GET_USERS,
  getUsers,
  CHAT_SAVE_USERS,
  saveUsers,
};
