require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();


/*const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    // Additional options
  });
*/

const db = require('./models');

db.sequelize.sync().then((req) => {
   app.listen(process.env.NODE_DOCKER_PORT, () => {
      console.log(`App listening on port ${process.env.NODE_DOCKER_PORT}`);
   })
})