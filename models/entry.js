module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      text: DataTypes.TEXT,
      rootId: DataTypes.INTEGER
      },
      {
        paranoid: true
      }
    );

    Entry.associate = function(models){
      Entry.belongsTo(models.Story, {
          foreignKey: "rootId",
          allowNull: true
      });
      Entry.hasMany(models.EntryEntry,
        {
        foreignKey: "currentEntryId",
          allowNull: false
        
      });
    }
    // Sync to database
    Entry.sync();
    return Entry;
    
  };
  
