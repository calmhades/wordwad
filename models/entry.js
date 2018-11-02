module.exports = function(sequelize, DataTypes) {
    var Entry = sequelize.define("Entry", {
      title: DataTypes.STRING,
      author: DataTypes.TEXT,
      text: DataTypes.TEXT,
        //link to Story via story ID
      storyId: DataTypes.INTEGER,
      //Link to previous entry via ParentID
      //parentId: DataTypes.INTEGER,
      yourStory: DataTypes.BOOLEAN
    });
    Entry.isHierarchy();
    return Entry;
  };
  