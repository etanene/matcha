// convert: { login: 'root', email: 'root@mail.ru' }
// to: WHERE login=$1 AND email=$2
const getCondition = (data, startInd = 0) => {
  const keys = Object.keys(data);
  if (!keys.length) {
    return '';
  }

  let ind = startInd;
  const values = keys.map((key) => {
    ind += 1;
    return (`${key}=$${ind}`);
  });
  return `WHERE ${values.join(' AND ')}`;
};

// convert: { login: 'root', email: 'root@mail.ru' }
// to: SET login=$1, email=$2
const getUpdateValues = (data, startInd = 0) => {
  const keys = Object.keys(data);
  if (!keys.length) {
    return '';
  }

  let ind = startInd;
  const values = keys.map((key) => {
    ind += 1;
    return (`${key}=$${ind}`);
  });
  return `SET ${values.join(', ')}`;
};

// convert: [...data]
// to: (data[0]), (data[1]), (data[2])
const getInsertValue = (data) => {
  
};

module.exports = {
  getCondition,
  getUpdateValues,
};
