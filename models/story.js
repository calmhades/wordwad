module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      Creator: DataTypes.STRING,
      Title: DataTypes.TEXT(50),
      Genre: DataTypes.TEXT(50),
      RootEntryId: DataTypes.INTEGER
    });
    return Story;
  };
  