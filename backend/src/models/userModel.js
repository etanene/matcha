const { db, dbUtils } = require('../db');

const addUser = async (user) => {
  await db.query(`
    INSERT INTO
      users (email, login, first_name, last_name, birthday, passwd, unique_link)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
  `, [user.email, user.username, user.first_name, user.last_name, user.birthday, user.password, user.unique]);
};

const getUser = async (data, without) => {
  const res = await db.query(`
    SELECT
      *
    FROM
      users
    ${dbUtils.getInCondition(data, without, 0)}
  `, dbUtils.spreadValues(data));

  return (res.rows);
};

const updateUser = async (data, condition) => {
  const res = await db.query(`
    UPDATE
      users
    ${dbUtils.getUpdateValues(data)}
    ${dbUtils.getCondition(condition, Object.keys(data).length)}
  `, [...Object.values(data), ...Object.values(condition)]);

  return (res.rows);
};

const getRecommendUsers = async (data) => {
  const res = await db.query(`
    SELECT
      user_id, login, first_name, last_name, sex, info, earth_distance(
        ll_to_earth(u.latitude, u.longitude),
        ll_to_earth(me.latitude, me.longitude)
      ) as distance
    FROM
      users u,
    LATERAL (
      SELECT
        latitude, longitude
      FROM
        users
      WHERE
        login = $1
    ) as me
    WHERE
      login != $1
    AND
      user_id NOT IN (
        SELECT
          to_user_id
        FROM
          likes
        WHERE
          from_user_id = (
            SELECT
              user_id
            FROM
              users
            WHERE
              login = $1
          )
      )
    ORDER BY
      distance
  `, [data.login]);
  console.log(res.rows);
  return (res.rows);
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  getRecommendUsers,
};
