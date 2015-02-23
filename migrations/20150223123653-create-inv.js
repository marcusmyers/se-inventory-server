"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Invs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      tag: {
        type: DataTypes.STRING
      },
      serial: {
        type: DataTypes.STRING
      },
      hostname: {
        type: DataTypes.STRING
      },
      location: {
        type: DataTypes.STRING
      },
      laptop: {
        type: DataTypes.INTEGER
      },
      os_version: {
        type: DataTypes.STRING
      },
      cpu: {
        type: DataTypes.STRING
      },
      cost: {
        type: DataTypes.STRING
      },
      po: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Invs").done(done);
  }
};