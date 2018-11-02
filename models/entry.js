module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      text: DataTypes.TEXT,
    });

    Entry.associate = function(models){
      Entry.BelongsTo(models.Story, {
        foreignKey: {
          allowNull: false
        }
      });
      Entry.hasMany(models.EntryEntry,{
        foreightKey:{
          allowNull: false
        }
      });
    }
    return Entry;
  };
  