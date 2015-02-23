"use strict";
module.exports = function(sequelize, DataTypes) {
  var Inv = sequelize.define("Inv", {
    tag: DataTypes.STRING,
    serial: DataTypes.STRING,
    hostname: DataTypes.STRING,
    location: DataTypes.STRING,
    laptop: DataTypes.INTEGER,
    os_version: DataTypes.STRING,
    cpu: DataTypes.STRING,
    cost: DataTypes.STRING,
    po: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Inv;
};