const { db } = require('../db');

const savePhoto = async (photo, name, user) => {
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
};

// const getPhotos = async (username) => {
// }

module.exports = {
  savePhoto,
};
