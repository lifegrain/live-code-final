'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reports = sequelize.define('Reports', {
    cases: { 
      type: DataTypes.INTEGER,
    }
  }, {});
  Reports.associate = function(models) {
    // associations can be defined here
    Reports.belongsTo(models.Country, {foreignKey: 'CountryId', targetKey: 'id'})
    Reports.belongsTo(models.User, {foreignKey: 'UserId', targetKey: 'id'})
  };
  return Reports;
};