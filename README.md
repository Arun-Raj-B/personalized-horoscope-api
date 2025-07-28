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

