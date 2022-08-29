import { Sequelize } from "sequelize";
import database from "../config/database.js"; 
const { DataTypes } = Sequelize;

const Especies = database.define("Especies", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nombre: {
    type: DataTypes.STRING,
  },

  alimentacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  peligro: {
    type: DataTypes.STRING,
  },

  depredadores: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  movilidad: {
    type: DataTypes.INTEGER,
  },

  territorio: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false
});

export default Especies;