const { discoverService } = require('../services');
const { InternalError } = require('../errors');

const getRecommendUsers = async (req, res) => {
  try {
    const users = await discoverService.getRecommendUsers(req.query);
    res.send(users);
  } catch (e) {
    if (e instanceof Error) {
      res.status(e.status || 500).send(new InternalError());
    } else {
      res.status(e.status || 500).send(e);
    }
  }
};

module.exports = {
  getRecommendUsers,
};
