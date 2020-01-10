const { db } = require('../db');
const { DbException } = require('../errors');

const savePhoto = async (photo, name, user) => {
  try {
    await db.query(`
      INSERT INTO
        photos (user_id, name, order)
      VALUES
        ((
          SELECT
            user_id
          FROM
            users
          WHERE
            login = $1
        ), $2, $3)
    `, [user, name, photo.id]);
  } catch (e) {
    throw new DbException('Cant insert user data!');
  }
};

module.exports = {
  savePhoto,
};
