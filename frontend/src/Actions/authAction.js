const LOGIN_REGUEST = 'AUTH_LOGIN_REQUEST';

const login = () => ({
  type: LOGIN_REGUEST,
  payload: 'user1',
});

export default {
  LOGIN_REGUEST,
  login,
};
