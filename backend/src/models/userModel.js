const db = require('../db');

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
    throw (e);
  }
};

module.exports = {
  addUser,
};
