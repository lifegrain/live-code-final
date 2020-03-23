'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reports = sequelize.define('Reports', {
    cases: { 
      type: DataTypes.INTEGER,
    }
  }, {});
  Reports.associate = function(models) {
    // associations can be defined here
    Reports.belongsTo(models.Country)
    Reports.belongsTo(models.User)
  };
  return Reports;
};