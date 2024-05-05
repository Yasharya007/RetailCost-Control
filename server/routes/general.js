import express from "express";
import { upload } from "../middleware/multer.js";
import {getUser,getDashboardStats,registerUser,loginUser,logoutUser} from "../controllers/general.js";
import { verifyJWT } from "../middleware/auth.js";

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
router.post("/logout",verifyJWT,logoutUser);
router.get("/user/:id",getUser);
router.get("/dashboard",getDashboardStats);
export default router;