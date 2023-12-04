import express from 'express';
import { 
    viewOrderDetailsById,
    addOrderDetail,
    updateOrderDetail
 } from '../controllers/orderDetailsController.js';

const router = express.Router();

router.get('/view-order-detail/:id', viewOrderDetailsById);
router.post('/add-order-detail', addOrderDetail);
router.put('/update-order-detail/:id', updateOrderDetail);

export default  router;