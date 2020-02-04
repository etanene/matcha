const { db, dbUtils } = require('../db');

const saveTags = async (tags) => {
  console.log('tags model', tags);
  await db.query(`
    INSERT INTO
      tags (tag_value)
    ${dbUtils.getInsertValue(tags)}
    ON CONFLICT (tag_value)
      DO NOTHING
  `, [...tags]);
};

const saveTaggings = async (tags, userId) => {
  console.log('taggings model', tags, userId);
  await db.query(`
    INSERT INTO
      taggings (tag_id, user_id)
    SELECT
        tag_id, ${userId}
    FROM
      tags
    WHERE
      tag_value IN ${dbUtils.getInValues(tags)}
    AND
    NOT EXISTS
      (
        SELECT
          1
        FROM
          tags
        JOIN
          taggings ON tags.tag_id = taggings.tag_id
        WHERE
          tags.tag_value IN ${dbUtils.getInValues(tags)}
          AND
          taggings.user_id = ${userId}
      )
  `, [...tags]);
};

const getTags = async (tag) => {
  const res = await db.query(`
    SELECT
      *
    FROM
      tags
    WHERE
      SIMILARITY(tag_value, $1) > 0.3
  `, [tag]);

  return (res.rows);
};

const getTagsByUser = async (user) => {
  console.log('user model', user);
  const res = await db.query(`
    SELECT
      tags.tag_id, tags.tag_value
    FROM
      tags
    JOIN
      taggings ON tags.tag_id = taggings.tag_id
    JOIN
      users ON users.user_id = taggings.user_id
    WHERE
      taggings.user_id = (
        SELECT
          user_id
        FROM
          users
        WHERE
          login = $1
      )
  `, [user]);

  return (res.rows);
};

module.exports = {
  saveTags,
  saveTaggings,
  getTags,
  getTagsByUser,
};
