import { Sequelize } from "sequelize";

const db = new Sequelize('railway', 'root', 'JO0qBJbkSXI5PFr725gV', {
    host: "containers-us-west-30.railway.app",
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