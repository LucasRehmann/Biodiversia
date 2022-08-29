import  Sequelize  from 'sequelize';
import dbConfig from './config.json' assert {type: "json"};;

const environment = dbConfig["development"];

const database = new Sequelize(
  environment.database,
  environment.username,
  environment.password,
  {
    host: environment.host,
    dialect: environment.dialect,
  }
);

export default database;