const { ValidateException } = require('../errors');

const REGEXP_USERNAME = /^[A-Za-z\d]{4,12}$/;
const REGEXP_EMAIL = /^\S+@\S+\.\S+$/;
const REGEXP_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{4,12}$/;

const validateUserSignup = (user) => {
  if (!(user.username && REGEXP_USERNAME.test(user.username))) {
    throw new ValidateException('Invalid username!');
  } else if (!(user.email && REGEXP_EMAIL.test(user.email))) {
    throw new ValidateException('Invalid email!');
  } else if (!user.first_name) {
    throw new ValidateException('Invalid first name!');
  } else if (!user.last_name) {
    throw new ValidateException('Invalid last name!');
  } else if (!(user.password && REGEXP_PASSWORD.test(user.password))) {
    throw new ValidateException('Invalid password!');
  } else if (!(user.confirm_password && user.confirm_password === user.password)) {
    throw new ValidateException('Password does not match!');
  }
};

const getLoginData = (user) => {
  if (user && REGEXP_EMAIL.test(user)) {
    return ({ email: user });
  }
  return ({ login: user });
};

module.exports = {
  validateUserSignup,
  getLoginData,
};
