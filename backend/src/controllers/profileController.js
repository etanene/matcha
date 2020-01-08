const save = async (req, res) => {
  console.log(req.body);
  res.send('hello');
};

module.exports = {
  save,
};
