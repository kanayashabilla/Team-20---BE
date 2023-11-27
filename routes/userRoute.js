import express from "express";
import { addUser } from "../controllers/Usercontroller.js";

const router = express.Router();

router.post("/user", addUser);

export default router;