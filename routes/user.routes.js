import express from "express";
const router = express.Router();
import userController from "../controllers/user.controllers.js";


router.post("/send-email",userController.sendEmailController);


export default router;