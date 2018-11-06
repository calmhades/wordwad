module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      Title: DataTypes.TEXT,
      Genre: DataTypes.TEXT,
      creatorID: DataTypes.INTEGER
    },
    {
      paranoid: true
    }
    
    );
   
    // need associations - CREATORID to user foreign key, ROOT ENTRY to Entry foreign key
    Story.associate = function(models){
      Story.belongsTo(models.User, {
          foreignKey: {as: "creatorID"},
          allowNull: false
      });

        Story.hasOne(models.Entry, {
        foreignKey:{
          allowNull:false
        }
      });
    }
    // Syncing to database
    Story.sync();

    return Story;
  };
  
