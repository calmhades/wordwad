module.exports = function(sequelize, DataTypes) {
    var Story = sequelize.define("Story", {
      Title: DataTypes.TEXT,
      Genre: DataTypes.TEXT
    });
    return Story;
    // need associations - CREATORID to user foreign key, ROOT ENTRY to Entry foreign key
  };
  