module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
      name: DataTypes.STRING,
      email:{
        type: DataTypes.STRING,
        validate:{isEmail: true,
                  notNull: true}
  }
});
  return User;
};
