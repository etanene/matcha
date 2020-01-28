const { db } = require('../db');

const saveTags = async (tags) => {
  await db.query(`
    INSERT INTO
      tags (value)
    VALUES
      ${}
  `, [...tags]);
};

module.exports = {
  saveTags,
};
