const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/users.controllers');
const { signupValidation, loginValidation } = require('../validations/user-validations');
const handleValidationErrors = require('../middlewares/validation.middleware');

router.post('/signup', signupValidation, handleValidationErrors, signupUser);
router.post('/login', loginValidation, handleValidationErrors, loginUser);

module.exports = router;