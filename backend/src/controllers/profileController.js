const { profileService } = require('../services');

const save = async (req, res) => {
  try {
    // validate profile input
    console.log('logged', req.session.logged);
    await profileService.saveProfile(req.body, req.session.logged);
    res.send({ message: 'profile save' });
  } catch (e) {
    res.status(e.status || 500).send(e);
  }
};

module.exports = {
  save,
};
