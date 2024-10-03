import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/is.Authenticated.js";
// import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(register); ///singleUpload
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, updateProfile); //singleUpload

export default router;