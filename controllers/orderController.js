import Order from "../models/orderModel.js";
import db from "../config/database.js";

export const addToOrder = async (req, res) => {
    try {
        await Order.create(req.body)
        res.status(201).json('order added')
    }catch(err){
        res.send(err.message);
    }
};

export const viewOrderById = async (req, res) => {
    try {
      const result = await Order.findOne({ where: { orderId: req.params.id } });
  
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    } catch (err) {
      // Handle errors
      console.error(err.message);
      res.status(500).json({ error: err.message });
    }
};

export const updateOrder = async (req, res) => {
    const { name, phone, address } = req.body;
    const orderId = req.params.id;

    try {
        await Order.update(
            { name, phone, address },
            { where: { orderId } }
        );
        res.status(200).json({ msg: 'Order Updated Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error.message });
    }
};

export const placeOrder = async(req, res) =>{

};
