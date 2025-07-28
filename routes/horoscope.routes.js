const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/today', (req, res) => {
    // Placeholder for today's horoscope logic
    res.json({ message: 'Today\'s horoscope will be available soon!' });
});

module.exports = router;