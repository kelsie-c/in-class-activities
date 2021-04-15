const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'library_DB',
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
