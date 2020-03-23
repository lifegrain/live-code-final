'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define( `Country`, {
      name: DataTypes.STRING,
      cases: DataTypes.INTEGER,
      deaths: DataTypes.INTEGER,
      recovered: DataTypes.INTEGER
    }, {});
  Country.associate = function(models) {
    // associations can be defined here
    Country.hasMany(models.Reports);
  };
  return Country;
};
