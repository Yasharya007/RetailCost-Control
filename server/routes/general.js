import express from "express";
import { upload } from "../middleware/multer.js";
import {getUser,getDashboardStats,registerUser,loginUser,logoutUser} from "../controllers/general.js";
import { verifyJWT } from "../middleware/auth.js";
import cookieParser from "cookie-parser";
const router =express.Router();


router.post("/register",
upload.fields([
        {
            name:"avatar",
            maxCount:1
        }
    ])
,registerUser)
router.post("/login",upload.none(),loginUser);
router.post("/logout",cookieParser(),verifyJWT,logoutUser);
router.get("/auth",verifyJWT,getUser);
router.get("/dashboard",verifyJWT,getDashboardStats);
export default router;