const { DataTypes } = require('sequelize');
const sequelize = require('../db');

module.exports = (sequelize) => {sequelize.define(
  'menu',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    img: DataTypes.TEXT
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

}
