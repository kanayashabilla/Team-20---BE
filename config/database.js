import "dotenv/config";
import {Sequelize} from "sequelize";

const db = new Sequelize({
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

console.log('DATA USERNAME:', process.env.DATABASE_USERNAME);
console.log('DATA PASSWORD:', process.env.DATABASE_PASSWORD);

export default db;