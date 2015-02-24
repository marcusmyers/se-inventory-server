"use strict";
module.exports = function(sequelize, DataTypes) {
  var Inv = sequelize.define("Inv", {
    tag: DataTypes.STRING,
    serial: DataTypes.STRING,
    hostname: DataTypes.STRING,
    location: DataTypes.STRING,
    laptop: DataTypes.BOOLEAN,
    os_version: DataTypes.STRING,
    cpu: DataTypes.STRING,
    memory: DataTypes.STRING,
    cost: DataTypes.DECIMAL(10,2),
    po: DataTypes.INTEGER,
    ip: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Inv;
};
