const { db } = require('../db');
const { DbException } = require('../errors');

const savePhoto = async (photo, name, user) => {
  try {
    console.log('usename', user);
    // await db.query(`
    //   INSERT INTO
    //     photos (user_id, name, order_id)
    //   VALUES
    //     ((
    //       SELECT
    //         user_id
    //       FROM
    //         users
    //       WHERE
    //         login = $1
    //     ), $2, $3)
    // `, [user, name, photo.id]);
    await db.query(`
      UPDATE
        photos
      SET
        name = $2
      WHERE
        order_id = $3
        AND
        user_id = (
          SELECT
            user_id
          FROM
            users
          WHERE
            login = $1
        )`, [user, name, photo.id]);
    await db.query(`
      INSERT INTO
        photos (user_id, name, order_id)
      SELECT
        (SELECT
          user_id
        FROM
          users
        WHERE
          login = $1), $2, $3
      WHERE NOT EXISTS
        (SELECT
          1
        FROM
          photos
        WHERE
          order_id = $3
          AND
          user_id = (
            SELECT
              user_id
            FROM
              users
            WHERE
              login = $1
          )
        );
    `, [user, name, photo.id]);
  } catch (e) {
    throw new DbException('Cant insert user data!');
  }
};
// UPDATE table SET sourcecode=$2 WHERE id=$1;
// INSERT INTO table (id, sourcecode)
//     SELECT $1, $2
//     WHERE NOT EXISTS (SELECT 1 FROM table WHERE id=$1);

module.exports = {
  savePhoto,
};
