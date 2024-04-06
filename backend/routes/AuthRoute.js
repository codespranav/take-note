import mongoose from "mongoose";
import express from "express"
import { loginController, registerController } from "../controller/UserController.js";
import { requireSignIn } from "../middlewares/auth-middleware.js";
const router = express.Router();

// authentication route
router.post("/register", registerController )
router.post("/login", loginController )

// test route
router.post("/test", requireSignIn, (req, res)=>{
    res.send({
        message: "Logged in from Test Route",
        user: req.user,
        username: req.user.name
    })
})


export default router;