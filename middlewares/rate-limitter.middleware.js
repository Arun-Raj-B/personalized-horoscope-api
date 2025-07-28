const rateLimit = require('express-rate-limit');

const horoscopeRateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    keyGenerator: (req, res) => {
        if (req.user && req.user.id) {
            return `user-${req.user.id}`;
        }
    },
    message: {
        error: 'Too many requests. Please try again after a minute.',
    },
});

module.exports = horoscopeRateLimiter;