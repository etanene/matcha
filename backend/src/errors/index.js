function AuthException(message) {
  this.message = message;
  this.name = 'Auth';
  this.status = 400;
}

function ValidateException(message) {
  this.message = message;
  this.name = 'Validate';
  this.status = 400;
}

function DbException(message) {
  this.message = message;
  this.name = 'DbInternal';
  this.status = 500;
}

module.exports = {
  AuthException,
  ValidateException,
  DbException,
};
