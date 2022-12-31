const sequelize = require("sequelize");
const database = new sequelize.Sequelize('sqlite::memory:');

module.exports = database;