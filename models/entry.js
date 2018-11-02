module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      title: DataTypes.STRING,
      author: DataTypes.TEXT(50),
      text: DataTypes.TEXT(255),
        //link to Story via story ID
      storyId: DataTypes.INTEGER,
      //Link to previous entry via ParentID
      //parentId: DataTypes.INTEGER,
      yourStory: DataTypes.BOOLEAN
    });
    Entry.isHierarchy();
    return Entry;
  };
  