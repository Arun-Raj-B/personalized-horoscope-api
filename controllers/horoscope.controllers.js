const { User, HoroscopeHistory } = require('../models');
const horoscopes = require('../utils/horoscope.utils');

const horoscopeToday = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existing = await HoroscopeHistory.findOne({
            where: {
                userId: user.id,
                served_on: today
            }
        });

        if (existing) {
            return res.json({ horoscope: existing.horoscope_text, zodiac: user.zodiac });
        }

        const zodiac = user.zodiac;
        const horoscopeText = horoscopes[zodiac];

        await HoroscopeHistory.create({
            userId: user.id,
            horoscope_text: horoscopeText,
            served_on: today
        });

        res.json({ horoscope: horoscopeText, zodiac });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to get today's horoscope." });
    }
}

const horoscopeHistory = async (req, res) => {
    try {
        const histories = await HoroscopeHistory.findAll({
            where: { userId: req.user.id },
            order: [['id', 'DESC']],
            limit: 7
        });

        res.json({ history: histories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch horoscope history." });
    }
};

module.exports = {
    horoscopeToday,
    horoscopeHistory
};