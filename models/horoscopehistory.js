'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HoroscopeHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HoroscopeHistory.init({
    userId: DataTypes.INTEGER,
    horoscope_text: DataTypes.TEXT,
    served_on: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'HoroscopeHistory',
  });
  HoroscopeHistory.associate = function (models) {
  HoroscopeHistory.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user',
    });
  };
  return HoroscopeHistory;
};