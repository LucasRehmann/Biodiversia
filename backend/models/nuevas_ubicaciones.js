import { Sequelize } from "sequelize";
import database from "../config/database.js"; 
const { DataTypes } = Sequelize;

const Nueva_ubicacion = database.define("Nuevas_ubicaciones", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  ubicacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  altura: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  
  temperatura: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  humedad: {
    type: DataTypes.INTEGER,
  },

}, {
  timestamps: false
});

export default Nueva_ubicacion;