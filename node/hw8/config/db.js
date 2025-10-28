import { Sequelize } from "sequelize";
import configData from './config.js';
import dotenv from 'dotenv';
dotenv.config();

const env = process.env.WORK_AREA || 'development';
const config = configData[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);
export default sequelize