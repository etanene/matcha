import userService from './userService';

function CustomError(error) {
  this.name = error.name || 'Internal';
  this.message = error.message || 'Internal server error';
  this.status = error.status || 500;
}

const postJson = async (url, data) => {
  const user = userService.getUser();
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${user && user.token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new CustomError(error);
  }

  const result = await response.json();
  return (result);
};

const getJson = async (url) => {
  const user = userService.getUser();
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user && user.token}`,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new CustomError(error);
  }

  const result = await response.json();
  return (result);
};

export default {
  postJson,
  getJson,
};
