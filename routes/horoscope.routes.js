const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();
const { horoscopeToday, horoscopeHistory } = require('../controllers/horoscope.controllers');

router.use(authMiddleware);

router.get('/today', horoscopeToday);
router.get('/history', horoscopeHistory);

module.exports = router;