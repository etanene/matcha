const { tagModel } = require('../models');

const saveTags = async (tags, user) => {
  await tagModel.saveTags(tags);
  
};

module.exports = {
  saveTags,
};
