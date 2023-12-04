import express from "express";
import {
  addToOrder,
  viewOrderById,
  updateOrder,
  placeOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post('/add-to-order', addToOrder);
router.get('/view-order/:id', viewOrderById);
router.put('/update-order/:id', updateOrder);
router.post('/place-order', placeOrder);

export default router;