const { db, dbUtils } = require('../db');

const savePhoto = async (photo, name, username) => {
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
      )`, [username, name, photo.id]);
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
  `, [username, name, photo.id]);
};

const getPhotos = async (users) => {
  const res = await db.query(`
    SELECT
      ph.name, ph.order_id, u.user_id
    FROM
      photos ph
    JOIN
      users u ON u.user_id = ph.user_id
    WHERE
      u.login IN ${dbUtils.getInValues(users)}
  `, users);

  return (res.rows);
};

module.exports = {
  savePhoto,
  getPhotos,
};
