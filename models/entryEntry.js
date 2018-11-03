module.exports = function(sequelize, DataTypes) {
    var EntryEntry = sequelize.define("EntryEntry", {
        currentEntryId: DataTypes.INTEGER,
        nextEntryID: DataTypes.INTEGER


    });
    EntryEntry.associate = function(models){
        EntryEntry.belongsTo(models.Entry, {
            foreignKey: "currentEntryId",
                allowNull: false
        });

        //not sure about this association.
        EntryEntry.belongsTo(models.EntryEntry,{
            foreignKey: "nextEntryID",
                allowNull: true
            })
    };


    return EntryEntry;
    
};