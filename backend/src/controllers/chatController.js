const { chatService } = require('../services');
const { InternalError, ValidateException } = require('../errors');

const getMatchUsers = async (req, res) => {
  console.log('req', req.query);
  try {
    if (!Object.keys(req.query).length) {
      throw new ValidateException('Empty parameters');
    }
    const users = await chatService.getMatchUsers(req.query);
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

module.exports = {
  getMatchUsers,
};
