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
  `, [...tags]);
};

const getTags = async (tag) => {
  await db.query(`
    SELECT
      *
    FROM
      tags
    WHERE
      SIMILARITY(CAST(tag_value AS Character), CAST($1 AS Character)) > 0.7
  `, [tag]);
};

module.exports = {
  saveTags,
  saveTaggings,
  getTags,
};
