const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const authRoutes = require('./routes/user.routes');
// const horoscopeRoutes = require('./routes/horoscope.routes');

dotenv.config();

const app = express();

const PORT = process.env.PORT;

/** Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Routes */
app.use('/auth', authRoutes);
// app.use('/horoscope', horoscopeRoutes);

/** Test api */
app.get('/', (req, res) => {
  res.send('Personalized Horoscope API is running');
});

/** Test DB Connection and Create server */
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed :', err);
  });