module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      Title: DataTypes.TEXT,
      Genre: DataTypes.TEXT
    });
    
    Story.associate = function(models) {
        
      Story.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
        });
        Story.hasOne(models.Entry, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    return Story;
  };
  