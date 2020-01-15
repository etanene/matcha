const { profileService } = require('../services');
const { InternalError } = require('../errors');

const save = async (req, res) => {
  try {
    // validate profile input
    await profileService.saveProfile(req.body, req.session.logged);
    res.send({ message: 'profile save' });
  } catch (e) {
    if (e instanceof Error) {
      res.status(e.status || 500).send(new InternalError());
    } else {
      res.status(e.status || 500).send(e);
    }
  }
};

const get = async (req, res) => {
  try {
    const profile = await profileService.getProfile(req.query);
    res.send(profile);
  } catch (e) {
    if (e instanceof Error) {
      res.status(e.status || 500).send(new InternalError());
    } else {
      res.status(e.status || 500).send(e);
    }
  }
};

module.exports = {
  save,
  get,
};
