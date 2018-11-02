module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email:{
        type: DataTypes.STRING,
        validate:{isEmail: true,
                  notNull: true}
        },
      username: DataTypes.STRING,
      password: DataTypes.STRING
  });
  return User;
};
