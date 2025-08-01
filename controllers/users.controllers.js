const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getZodiacSign } = require('../utils/zodiac.utils');

const signupUser = async (req, res) => {
    try {
        const { name, email, password, birthdate } = req.body;

        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) return res.status(400).json({ message: 'Email already in use' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const zodiac = getZodiacSign(birthdate);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            birthdate,
            zodiac,
        });

        res.status(201).json({
            message: 'User created successfully',
            user: { id: user.id, email: user.email, zodiac: user.zodiac }
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    signupUser,
    loginUser
}