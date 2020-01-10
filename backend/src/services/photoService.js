const uuid = require('uuid/v4');
const path = require('path');
const fs = require('fs').promises;

const { photoModel } = require('../models');

const savePhoto = async (photo, user) => {
  const filename = uuid();
  const base64 = photo.src.replace(/data:image.*?;base64,/, '');
  await fs.writeFile(path.resolve('/app/public/photo', filename), base64, 'base64');
  await photoModel.savePhoto(photo, filename, user);
};

const savePhotos = async (photos, user) => {
  try {
    try {
      await fs.access('/app/public/photo');
    } catch (e) {
      await fs.mkdir('/app/public/photo', { recursive: true });
    }

    const promises = Object.values(photos).map(async (photo) => {
      await savePhoto(photo, user);
    });
    await Promise.all(promises);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = {
  savePhotos,
};
