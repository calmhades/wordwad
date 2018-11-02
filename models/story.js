module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      Creator: DataTypes.STRING,
      //Link to Author via Creator ID
      CreatorId: DataTypes.INTEGER,
      Title: DataTypes.TEXT(50),
      Genre: DataTypes.TEXT(50),
      //Link to Entries via RootEntryID ancestor ID??
      RootEntryId: DataTypes.INTEGER
    });
    return Story;
  };
  