import { Router } from "express";
import { LoginUser, registerUser } from "../controllers/authController.js";

const router = Router();


// Register user
router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);


export default router;
