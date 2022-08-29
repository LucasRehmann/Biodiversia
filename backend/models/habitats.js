import { Sequelize } from "sequelize";
import database from "../config/database.js"; 
const { DataTypes } = Sequelize;

const Habitats = database.define("Habitats", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nombre: {
    type: DataTypes.STRING,
  },

  temperatura: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  humedad: {
    type: DataTypes.INTEGER,
  },

  clima: {
    type: DataTypes.STRING,
    allowNull: true,
  },

}, {
  timestamps: false
});

export default Habitats;