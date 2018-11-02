module.exports = function(sequelize, DataTypes) {
    var EntryEntry = sequelize.define("EntryEntry", {
    });
    return EntryEntry;
    // need to add associations for CURRENT ENTRY foreign key & NEXT ENTRY foreign key
};