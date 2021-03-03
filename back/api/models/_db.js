const Sequelize = require("sequelize");

const db = new Sequelize(
    "postgres://mgmarian:admin@localhost:5432/omdb",
    {
        logging: false,
        operatorsAliases: 0
    }
);

module.exports = db;