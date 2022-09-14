const { DataTypes } = require('sequelize');
const {Restaurante} = require('./Restaurante');
const sequelize = require('../db');

module.exports = (sequelize) => {sequelize.define(
  'empleado',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    
     
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
}

