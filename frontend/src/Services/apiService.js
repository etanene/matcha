const postJson = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = await response.json();
  return (result);
};

const getJson = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();
    throw Error(error.message);
  }

  const result = await response.json();
  return (result);
};

export default {
  postJson,
  getJson,
};
