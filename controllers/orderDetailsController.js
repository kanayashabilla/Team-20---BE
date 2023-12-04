import orderDetail from "../models/orderDetailsModel.js";

export const viewOrderDetailsById = async (req, res) => {
    try {
      const result = await orderDetail.findAll({ where: { orderId: req.params.id } });
  
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

export const addOrderDetail = async(req, res) =>{
    try {
        await orderDetail.create(req.body)
        res.status(201).json('Order added succes')
    }catch(err){
        res.send(err.message);
    }
};

export const updateOrderDetail = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        await orderDetail.update(
            { productId, quantity },
            {
                where: { orderId: req.params.id }
            }
        );
        res.status(200).json({ msg: 'Order Updated Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: error.message });
    }
};