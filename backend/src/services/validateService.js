const { ValidateException } = require('../errors');

const validateUserSignup = (user) => {
  if (!(user.username && /^[A-Za-z\d]{4,12}$/.test(user.username))) {
    throw new ValidateException('Invalid username!');
  } else if (!(user.email && /^\S+@\S+\.\S+$/.test(user.email))) {
    throw new ValidateException('Invalid email!');
  } else if (!user.first_name) {
    throw new ValidateException('Invalid first name!');
  } else if (!user.last_name) {
    throw new ValidateException('Invalid last name!');
  } else if (!(user.password && /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{4,12}$/.test(user.password))) {
    throw new ValidateException('Invalid password!');
  } else if (!(user.confirm_password && user.confirm_password === user.password)) {
    throw new ValidateException('Password does not match!');
  }
};

module.exports = {
  validateUserSignup,
};
