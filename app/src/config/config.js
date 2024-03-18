require('dotenv').config(); // Load environment variables from .env file

// Configuration for Sequelize
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectModule: require('pg'),
    // Additional options
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectModule: require('pg'),
    // Additional options
  },
  // You can define additional environments (e.g., production) if needed
};