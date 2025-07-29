# 🔮 Personalized Horoscope API

A Node.js + Express REST API that provides daily personalized horoscopes based on a user's zodiac sign, automatically determined from their birthdate.

---

## 🚀 Getting Started

To get this project running locally:

1. **Clone the repository**  
    Clone the project to your local machine using:

    ```bash
    git clone https://github.com/Arun-Raj-B/personalized-horoscope-api
    cd personalized-horoscope-api
    ```

2. **Install dependencies**
    Ensure you have Node.js and npm installed. Then, install required packages:

    ```bash
    npm install
    ```

3. **Configure environment variables**
    Create a .env file in the root directory and add the following variables:

    ```bash
    PORT=3000
    JWT_SECRET=your_secret_key
    DB_USERNAME=your_postgres_username
    DB_PASSWORD=your_postgres_password
    DB_NAME=your_database_name
    DB_HOST=localhost
    ```

4. **Setup the PostgreSQL database**
    Ensure PostgreSQL is running locally and the database mentioned in .env exists. You can create it using the  PostgreSQL CLI or any GUI tool like pgAdmin:

    ```bash
    CREATE DATABASE your_database_name;
    ```

5. **Run the server**
    Start the development server:

    ```bash
    npm start
    ```

    The API server will now be running on:
    ```bash
    http://localhost:3000
    ```

6. **View the Swagger API documentation**
    Navigate to:
    
    ```bash
    http://localhost:3000/playground
    ```

ℹ️ This project used AI tools like GitHub Copilot for help with syntaxes and documentation.

## 🧠 Design Decisions

✅ **User authentication (Signup & Login) using JWT**  
Stateless JWT tokens are used for secure, scalable authentication.

🔐 **Passwords hashed with bcrypt**  
Ensures that user passwords are securely stored and never saved in plain text.

♈ **Zodiac sign auto-detected from birthdate**  
Reduces user input and avoids errors by automatically determining zodiac based on DOB.

📆 **Get daily or historical horoscopes**  
Flexible endpoints allow fetching today's or past dates’ horoscopes for any user.

📊 **Swagger (OpenAPI) documentation**  
Built-in Swagger UI for live API documentation and easy testing.

⚙️ **PostgreSQL integration with Sequelize ORM**  
Robust SQL database with Sequelize for model definitions and query abstraction.

🛡️ **Rate limiting middleware for protection**  
Protects against brute-force attacks and abuse using express-rate-limit.

🧪 **Input validation with express-validator**  
All incoming data is validated for correctness, reducing bugs and bad data.

## 🛠️ Improvements with More Time

🔁 **Redis Caching for Horoscope Fetches**  
To reduce database hits for frequently requested horoscopes (e.g., daily zodiac data).

📬 **Daily Horoscope Notifications**  
Send automated daily horoscopes via email or push notifications using job schedulers (like node-cron) and services like SendGrid.

📱 **OAuth Integration**  
Allow users to log in with Google or other accounts, improving user experience and trust.

📤 **Export Horoscope History**  
Let users download or export their historical horoscopes in PDF/CSV formats.

## ⚖️ Scalability for Personalized Horoscopes

Currently, the system provides one horoscope per zodiac sign per day — i.e., 12 static entries reused for all users.

If the system evolves to serve **fully personalized horoscopes per user**, it must scale to handle:

📈 **Massive Data Generation**
Personalized content would be dynamically generated (e.g., per user per day), drastically increasing processing requirements.

⚙️ **Compute Scaling**
Use background jobs and scalable workers (e.g., via Bull with Redis or queues) to generate horoscopes asynchronously.

⚡ **Caching Layer**
Use Redis or in-memory caching to store and serve already generated horoscopes quickly.

🧠 **AI Integration**
For truly personalized content, integrate with astrology engines.



