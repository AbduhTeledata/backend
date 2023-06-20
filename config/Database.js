import { Sequelize } from "sequelize";

const db = new Sequelize('freedb_h941teledata-salon', 'freedb_Abduh2020', 'gFHd!UMu56C5Q65', {
    host: "sql.free.tech",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }
});
//h941teledata_salon
export default db;