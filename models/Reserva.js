const { DataTypes } = require('sequelize');
const {Cliente} = require('./Cliente.js');
const {Restaurante} = require('./Restaurante');
const {Servicio} = require('./Servicio');
const sequelize = require('../db');

module.exports = (sequelize) => {  sequelize.define(
  'reserva',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'en espera'
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: Cliente
      }
    },
    restaurante_id: {
      type: DataTypes.INTEGER,
      references: {
        key: 'id',
        model: Restaurante
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);


}
