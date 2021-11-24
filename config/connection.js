// Require dotenv
require('dotenv').config();

// Require sequelize
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

// Export Sequelize
module.exports = sequelize;

