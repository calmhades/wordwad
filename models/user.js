module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notNull: true
      }
    }
    // need password as well
    //password: {
    //type: Sequelize.STRING,
    //allowNull: false
  });
  return User;
};
