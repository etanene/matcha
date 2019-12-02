// convert: { login: 'root', email: 'root@mail.ru' }
// to: WHERE login=$1 AND email=$1
const getCondition = (data) => {
  const keys = Object.keys(data);
  if (!keys.length) {
    return '';
  }

  const values = keys.map((key, ind) => (`${key}=$${ind + 1}`));
  return `WHERE ${values.join(' AND ')}`;
};

module.exports = {
  getCondition,
};
