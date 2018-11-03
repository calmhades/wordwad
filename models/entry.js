module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      text: DataTypes.TEXT,
    });

    Entry.associate = function(models){
      Entry.belongsTo(models.Story, {
        foreignKey: {
          allowNull: false
        }
      });
      Entry.hasMany(models.EntryEntry,{
        foreignKey:{
          allowNull: false
        }
      });
    }
    return Entry;
    
  };
  