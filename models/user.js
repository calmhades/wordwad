
module.exports = function (sequelize, DataTypes) {
  // not sure if we need Sequelize or DataTypes as our second arg
  var User = sequelize.define("User", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email:{
        type: DataTypes.STRING,
        validate:{isEmail: true,
                 }
        },
      username: DataTypes.STRING,
      password: DataTypes.STRING
      }, 
      {
        paranoid: true
      }
  );

    // Trying out validPassword Prototype 
    User.prototype.validPassword = function(password) {
  
      return (this.password === password)
    };
      
    User.associate = function(models){
      User.hasMany(models.Story, {
        foreignKey: "creatorID"
      });
      
    }
    User.sync();

  return User;
};

