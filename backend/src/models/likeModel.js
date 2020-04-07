const { db } = require('../db');

const likeUser = async (data) => {
  const updateRes = await db.query(`
    UPDATE
      likes
    SET
      match = true
    WHERE
      from_user_id = $1
    AND
      like_value = true
    AND
      to_user_id = (
        SELECT
          user_id
        FROM
          users
        WHERE
          login = $2
      )
  `, [data.to, data.from]);
  const match = !!updateRes.rowCount;
  await db.query(`
    INSERT INTO
      likes (from_user_id, to_user_id, like_value, match)
    SELECT
      user_id, $1, $2, ${match}
    FROM
      users
    WHERE
      login = $3
  `, [data.to, !!data.type, data.from]);
  return (match);
};

module.exports = {
  likeUser,
};
