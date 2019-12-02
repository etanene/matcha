const { db, dbUtils } = require('../db');
const { DbException } = require('../errors');

const addUser = async (user) => {
  try {
    await db.query(`
      INSERT INTO
        users (email, login, first_name, last_name, passwd)
      VALUES
        ($1, $2, $3, $4, $5)
    `, [user.email, user.username, user.first_name, user.last_name, user.password]);
  } catch (e) {
    console.log(e);
    throw new DbException('Cant insert user data!');
  }
};

const getUser = async (data) => {
  try {
    const res = await db.query(`
      SELECT
        *
      FROM
        users
      ${dbUtils.getCondition(data)}
    `, Object.values(data));

    return (res.rows);
  } catch (e) {
    console.log(e);
    throw new DbException('Cant select user data');
  }
};

module.exports = {
  addUser,
  getUser,
};
