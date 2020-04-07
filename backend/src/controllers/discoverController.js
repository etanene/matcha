const { discoverService } = require('../services');
const { InternalError, ValidateException } = require('../errors');
const { matchUsers } = require('../socket');

const getRecommendUsers = async (req, res) => {
  try {
    if (!Object.keys(req.query).length) {
      throw new ValidateException('Empty parameters');
    }
    const users = await discoverService.getRecommendUsers(req.query);
    res.send(users);
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      res.status(e.status || 500).send(new InternalError());
    } else {
      res.status(e.status || 500).send(e);
    }
  }
};

const like = async (req, res) => {
  try {
    const match = await discoverService.likeUser(req.body);
    if (match) {
      const io = req.app.get('io');
      if (matchUsers[match.to]) {
        io.to(matchUsers[match.to].socketId).emit('match', `you have match with ${match.from}`);
      }
      if (matchUsers[match.from]) {
        io.to(matchUsers[match.from].socketId).emit('match', `you have match with ${match.to}`);
      }
    }
    res.send({});
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      res.status(e.status || 500).send(new InternalError());
    } else {
      res.status(e.status || 500).send(e);
    }
  }
};

const connect = async (req) => {
  console.log(req);
};

module.exports = {
  getRecommendUsers,
  like,
  connect,
};
