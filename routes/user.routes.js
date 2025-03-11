import express from "express";

const router = express.Router();
import userController from "../controllers/user.controllers.js";

router.post("/contact", userController.sendContactEmailController);
router.post("/subscribe", userController.sendSubscribeEmailController);

export default router;