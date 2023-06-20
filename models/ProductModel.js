import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Products = db.define('x941products', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
    // description: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //     validate: {
    //         notEmpty: false,
    //         len: [3, 100]
    //     }
    // }
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // }
}, {
    freezeTableName: true
});

// Users.hasMany(Products);
// Products.belongsTo(Users, {foreignKey: 'userId'});
Products.belongsTo(Users, {
    as: "user",
    foreignKey: {
      allowNull: false
    }
  });

export default Products;