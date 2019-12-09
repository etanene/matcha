const { db, dbUtils } = require('../db');
const { DbException } = require('../errors');

const addUser = async (user) => {
  try {
    await db.query(`
      INSERT INTO
        users (email, login, first_name, last_name, passwd, unique_link)
      VALUES
        ($1, $2, $3, $4, $5, $6)
    `, [user.email, user.username, user.first_name, user.last_name, user.password, user.unique]);
  } catch (e) {
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
    throw new DbException('Cant select user data');
  }
};

const verifyUser = async (data) => {
  try {
    const res = await db.query(`
      UPDATE
        users
      SET
        validate = TRUE
      ${dbUtils.getCondition(data)}
    `, Object.values(data));

    return (res.rowCount);
  } catch (e) {
    throw new DbException('Cant update user data');
  }
};

module.exports = {
  addUser,
  getUser,
  verifyUser,
};
