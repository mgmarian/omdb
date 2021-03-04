const { Model, DataTypes } = require('sequelize');
const db = require('./_db')
const bcrypt = require('bcrypt');

class User extends Model { }
User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salt: {
    type: DataTypes.STRING
  }
}, { sequelize: db, modelName: 'user' });


User.beforeCreate((user) => {
  return bcrypt
      .genSalt(16)
      .then((salt) => {
          user.salt = salt;
          return user.hash(user.password, user.salt);
      })
      .then((hash) => {
          user.password = hash;
      });
});

User.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt)
}

module.exports = User;