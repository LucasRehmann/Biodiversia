import { Sequelize } from "sequelize";
import Habitats from "./habitats.js"; 
import Especies from "./especies.js"; 
import database from "../config/database.js"; 
const { DataTypes } = Sequelize;

const Habitat_especies = database.define('habitat_especies', {}, { timestamps: false });

Especies.belongsToMany(Habitats,{through: "habitat_especies"});
Habitats.belongsToMany(Especies, {through: "habitat_especies"});

export default Habitat_especies;