const setUser = (data) => {
  localStorage.setItem('loggedUser', JSON.stringify(data));
};

const getUser = () => (JSON.parse(localStorage.getItem('loggedUser')));

export default {
  setUser,
  getUser,
};
