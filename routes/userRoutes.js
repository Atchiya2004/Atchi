import express from "express";
import { register } from "../controller/userController.js";
import { sendMail } from "../controller/sendMail.js";

const userRoute = express.Router();

// GET


// POST

userRoute.post("/register",register)

userRoute.post("/send-email",sendMail)


// PUT


// DELETE





export default userRoute