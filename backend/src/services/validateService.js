const { ValidateException } = require('../errors');

const REGEXP_USERNAME = /^[A-Za-z\d]{4,12}$/;
const REGEXP_EMAIL = /^\S+@\S+\.\S+$/;
const REGEXP_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{4,12}$/;
const REGEXP_BIRTHDAY = /^([0-2][0-9]|(3)[0-1])(\.)(((0)[0-9])|((1)[0-2]))(\.)\d{4}$/;

const validateUsername = (username) => {
  if (!(username && REGEXP_USERNAME.test(username))) {
    throw new ValidateException('Invalid username!');
  }
};

const validateEmail = (email) => {
  if (!(email && REGEXP_EMAIL.test(email))) {
    throw new ValidateException('Invalid email');
  }
};

const validateBirthday = (birthday) => {
  if (!(birthday && REGEXP_BIRTHDAY.test(birthday))) {
    throw new ValidateException('Invalid birthday');
  }
};

const validatePasswords = (password, confirmPassword) => {
  if (!(password && REGEXP_PASSWORD.test(password))) {
    throw new ValidateException('Invalid password!');
  } else if (!(confirmPassword && confirmPassword === password)) {
    throw new ValidateException('Password does not match!');
  }
};

const validateUser = (user) => {
  if (!user.first_name) {
    throw new ValidateException('Invalid first name!');
  } else if (!user.last_name) {
    throw new ValidateException('Invalid last name!');
  }
  validateUsername(user.username);
  validateEmail(user.email);
  validateBirthday(user.birthday);
  validatePasswords(user.password, user.confirm_password);
};

const getLoginData = (user) => {
  if (user && REGEXP_EMAIL.test(user)) {
    return ({ email: user });
  }
  return ({ login: user });
};

module.exports = {
  validateUser,
  getLoginData,
  validateUsername,
  validateEmail,
  validatePasswords,
};
