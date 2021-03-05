const db = require("./_db");
const S = require("sequelize");

class Favorite extends S.Model {}

Favorite.init(
    {
        movieId: {
            type:S.INTEGER,
            allowNull:false
        },
    },
    { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;