module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      text: DataTypes.TEXT,
    });

    Entry.associate = function(models) {
      Entry.belongsTo(models.Story, {
        
      });
    }
      Entry.hasMany(models.EntryEntry, {
      });

    return Entry;
    
  };
  