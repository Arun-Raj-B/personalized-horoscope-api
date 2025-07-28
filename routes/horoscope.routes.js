const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const { horoscopeToday, horoscopeHistory } = require('../controllers/horoscope.controllers');
const horoscopeRateLimiter = require('../middlewares/rate-limitter.middleware');

router.use(authMiddleware);
router.use(horoscopeRateLimiter);

/**
 * @swagger
 * /horoscope/today:
 *   get:
 *     summary: Get today's horoscope
 *     tags:
 *       - Horoscope
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Today's horoscope retrieved successfully
 */
router.get('/today', horoscopeToday);

/**
 * @swagger
 * /horoscope/history:
 *   get:
 *     summary: Get user's horoscope history
 *     tags:
 *       - Horoscope
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User's horoscope history retrieved successfully
 */
router.get('/history', horoscopeHistory);

module.exports = router;