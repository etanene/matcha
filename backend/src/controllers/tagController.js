const { InternalError } = require('../errors');
const { tagService } = require('../services');

const get = async (req, res) => {
  try {
    const tags = await tagService.getTags(req.query);
    res.send(tags);
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
  get,
};
