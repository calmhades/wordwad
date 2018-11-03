module.exports = function (sequelize, DataTypes) {
  // not sure if we need Sequelize or DataTypes as our second arg
  var User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
      //using the DataTypes arg instead of Sequelize because thats what the function appears to take in
    },
    firstName: {
      type: DataTypes.STRING,
      notEmpty: true
      // not sure if notEmpty and notNull are the same thing
    },
    lastName: {
      type: DataTypes.STRING,
      notNull: true
    },
    email: {
      type: DataTypes.STRING,
      notNull: true,
      //moved notNull: true outside of the validate object
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  User.associate = function (models) {
    User.hasMany(models.Story, {
      foreignKey: creatorID,
      allowNull: false

    });

  }
  return User;
};

