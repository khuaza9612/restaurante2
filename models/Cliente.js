const { DataTypes } = require('sequelize');
const sequelize = require('../db');


module.exports = (sequelize) => {
   sequelize.define(
  'cliente',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    isAdmin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    img: {
      type: DataTypes.TEXT,
      defaultValue: 'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png'
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
};


