const LOGIN_REGUEST = 'AUTH_LOGIN_REQUEST';
const LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
const LOGIN_LOGOUT = 'AUTH_LOGIN_LOGOUT';
const LOGIN_ERROR = 'AUTH_LOGIN_ERROR';

const login = (username, password) => ({
  type: LOGIN_REGUEST,
  username,
  password,
});

const logout = () => ({
  type: LOGIN_LOGOUT,
});

export default {
  LOGIN_REGUEST,
  LOGIN_SUCCESS,
  LOGIN_LOGOUT,
  LOGIN_ERROR,
  login,
  logout,
};
