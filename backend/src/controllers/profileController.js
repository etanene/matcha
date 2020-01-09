const { profileService } = require('../services');

const save = async (req, res) => {
  try {
    // console.log(Object.keys(req.body.photo));
    // validate profile input
    profileService.saveProfile(req.body);
    res.send({ message: 'profile save' });
  } catch (e) {
    res.status(e.status || 500).send(e);
  }
};

module.exports = {
  save,
};
