const uuid = require('uuid/v4');
const path = require('path');
const fs = require('fs').promises;

const savePhoto = async (photo) => {
  try {
    const filename = uuid();
    console.log('dirname', __dirname);
    const base64 = photo.src.replace(/data:image.*?;base64,/, '');
    try {
      await fs.access(path.resolve('/app/public/photo'));
    } catch (e) {
      console.log('access', e);
      await fs.mkdir(path.resolve('/app/public/photo'));
    }
    await fs.writeFile(path.resolve('/app/public/photo', filename), base64, 'base64');
  } catch (e) {
    console.log('write', e);
    throw e;
  }
};

module.exports = {
  savePhoto,
};
