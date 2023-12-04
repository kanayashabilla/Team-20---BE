import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Product = db.define('products', {
    productId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: true,
    }
});

export default Product;