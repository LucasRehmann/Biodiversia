import { Sequelize } from "sequelize";
import database from "../config/database.js"; 
const { DataTypes } = Sequelize;

const Area_afectada = database.define("Areas_afectadas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nombre: {
    type: DataTypes.STRING,
  },

  ubicacion: {
    type: DataTypes.INTEGER,
  },

  causa: {
    type: DataTypes.STRING,
    allowNull: true,
  },


}, {
  timestamps: false
});



export default Area_afectada;