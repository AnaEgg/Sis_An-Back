import { Sequelize } from 'sequelize';

const db = new Sequelize('sis_an_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  });

  export default db;