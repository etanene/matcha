// const { userService } = require('../services');

const get = async (req, res) => {
  console.log(req.params);
  console.log(req.query);
  try {
    res.send('usercontroller');
  } catch (e) {
    res.status(e.status || 500).send(e);
  }
};

module.exports = {
  get,
};
