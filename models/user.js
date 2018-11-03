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

<<<<<<< HEAD
  User.associate = function(models) {
    User.hasMany(models.Story, {

    })
    User.hasMany(models.Entry, {
      
    })
  }

=======
    User.associate = function(models){
      User.hasMany(models.Story, {
        foreignKey: creatorID, 
          allowNull: false

      });
      
    }
>>>>>>> master
  return User;
};

