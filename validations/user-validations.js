const { check } = require('express-validator');

const signupValidation = [
  check('name').notEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  check('birthdate')
    .isISO8601()
    .toDate()
    .withMessage('Birthdate must be a valid date'),
];

const loginValidation = [
  check('email').isEmail().withMessage('Valid email is required'),
  check('password').notEmpty().withMessage('Password is required'),
];

module.exports = {
  signupValidation,
  loginValidation,
};
