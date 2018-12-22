const { DB_HOST, DB_USER, DB_PASS } = process.env;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql"
});

module.exports = sequelize;
