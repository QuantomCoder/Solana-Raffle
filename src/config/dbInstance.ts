import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize({
  dialect: 'postgres', 
  host: process.env.DB_HOST || 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10), 
  username: process.env.DB_USER || '',
  password: process.env.DB_PASS || '', 
  database: process.env.DB_NAME || '', 
  logging: false, 
});
export default sequelize;
