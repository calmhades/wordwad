module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      text: DataTypes.TEXT,
    });

<<<<<<< HEAD
    Entry.associate = function(models) {
      Entry.belongsTo(models.Story, {
        
      });
    }
      Entry.hasMany(models.EntryEntry, {
      });

=======
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
>>>>>>> master
    return Entry;
    
  };
  