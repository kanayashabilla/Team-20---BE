import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Product from "./productModel.js";
import Order from "./orderModel.js";

const {DataTypes} = Sequelize;

const orderDetail = db.define('orderDetails', {
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
});

orderDetail.belongsTo(Product);
orderDetail.belongsTo(Order);

export default orderDetail;