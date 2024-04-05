import mongoose from "mongoose";
import express from "express"
import { loginController, registerController } from "../controller/UserController.js";
const router = express.Router();

// authentication route
router.post("/register", registerController )
router.post("/login", loginController )


export default router;