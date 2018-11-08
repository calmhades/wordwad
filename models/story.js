module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      Title: DataTypes.TEXT,
      Genre: DataTypes.TEXT
    },
    {
      paranoid: true
    }
    
    );
   
    // need associations - CREATORID to user foreign key, ROOT ENTRY to Entry foreign key
    Story.associate = function(models){
      Story.belongsTo(models.User, {
          foreignKey: "creatorID",
          allowNull: false
      });

        Story.hasOne(models.Entry, {
          foreignKey: "rootId",
          allowNull: false  
      });
    }
    // Syncing to database
    // Story.sync();

    return Story;
  };
  
