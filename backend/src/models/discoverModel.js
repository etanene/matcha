const { db } = require('../db');

const getRecommendUsers = async (data) => {
  const res = await db.query(`
    SELECT
      u.user_id, u.first_name, u.last_name, u.sex, u.orientation, u.info
    FROM
      users u
    JOIN
      photos
  `, Object.values(data));
};
