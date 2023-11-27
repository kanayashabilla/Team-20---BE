import {Sequelize} from "sequelize";

const db = new Sequelize("db_organifresh","root","Bogor1969", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

export default db;