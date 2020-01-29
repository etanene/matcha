const { db, dbUtils } = require('../db');

const saveTags = async (tags) => {
  console.log('tags model', tags);
  await db.query(`
    INSERT INTO
      tags (value)
    ${dbUtils.getInsertValue(tags)}
    ON CONFLICT (value)
      DO NOTHING
  `, [...tags]);
};

const saveTaggings = async (tags, user) => {
  console.log('taggings model', tags, user);

  await db.query(`
    INSERT INTO
      taggings (user_id, tag_id)
    SELECT
      tag_id, (SELECT)
    FROM
      tags t
    WHERE
      t.value IN ()
  `, []);
};

module.exports = {
  saveTags,
};
