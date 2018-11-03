module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      Title: DataTypes.TEXT,
      Genre: DataTypes.TEXT
    });
<<<<<<< HEAD
    
    Story.associate = function(models) {
        
=======
   
    // need associations - CREATORID to user foreign key, ROOT ENTRY to Entry foreign key
    Story.associate = function(models){
>>>>>>> master
      Story.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
<<<<<<< HEAD
        });
        Story.hasOne(models.Entry, {
          foreignKey: {
            allowNull: false
          }
        });
    };
=======
      });
        Story.hasOne(model.Entry, {
        foreignKey:{
          allowNull:false
        }
      });
    }
    
>>>>>>> master
    return Story;
  };
  