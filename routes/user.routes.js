const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/users.controllers');
const { signupValidation, loginValidation } = require('../validations/user-validations');
const handleValidationErrors = require('../middlewares/validation.middleware');

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               birthdate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */
router.post('/signup', signupValidation, handleValidationErrors, signupUser);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User logged in successfully
 *       400:
 *         description: Validation error
 */
router.post('/login', loginValidation, handleValidationErrors, loginUser);

module.exports = router;