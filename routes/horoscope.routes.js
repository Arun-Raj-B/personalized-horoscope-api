const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const { horoscopeToday, horoscopeHistory } = require('../controllers/horoscope.controllers');
const horoscopeRateLimiter = require('../middlewares/rate-limitter.middleware');

router.use(authMiddleware);
router.use(horoscopeRateLimiter);

router.get('/today', horoscopeToday);
router.get('/history', horoscopeHistory);

module.exports = router;