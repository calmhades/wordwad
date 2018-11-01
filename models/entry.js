module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      author: DataTypes.TEXT(50),
        text: DataTypes.TEXT(255),
      storyId: DataTypes.INTEGER,
      parentId: DataTypes.INTEGER,
      yourStory: DataTypes.BOOLEAN
    });
    return Entry;
  };
  