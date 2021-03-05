const User = require('./user');
const Favorite = require('./favorite');
const db = require('./_db')

User.hasMany(Favorite);
Favorite.belongsTo(User);

module.exports = {
    User,
    Favorite,
    db
}