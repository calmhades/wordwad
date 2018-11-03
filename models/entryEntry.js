module.exports = function(sequelize, DataTypes) {
    var EntryEntry = sequelize.define("EntryEntry", {
        currentEntryId: DataTypes.INTEGER,
        nextEntryID: DataTypes.INTEGER


    });
    EntryEntry.associate = function(models){
        EntryEntry.BelongsTo(models.Entry, {
            foreignKey:currentEntryId,
                allowNull: false
        });

        //not sure about this association.
        EntryEntry.BelongsTo(models.EntryEntry,{
            foreignKey: nextEntryID,
                allowNull: true
            })
    };


    return EntryEntry;
    
};