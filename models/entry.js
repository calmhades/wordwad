module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      text: DataTypes.TEXT,
      },
      {
        paranoid: true
      }
    );

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
    // Sync to database
    Entry.sync();
    return Entry;
    
  };
  
