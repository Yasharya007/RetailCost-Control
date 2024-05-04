import express from "express";
import { upload } from "../middleware/multer.js";
import {getUser,getDashboardStats,registerUser} from "../controllers/general.js";

const router =express.Router();

// router.route("/register").post(
//     registerUser
// )
router.post("/register",
upload.fields([
        {
            name:"avatar",
            maxCount:1
        }
    ])
,registerUser)
// router.post("/register",
// upload.fields([
//     {
//         name:"avatar",
//         maxCount:1
//     }
// ]),
// registerUser
// )
router.get("/user/:id",getUser);
router.get("/dashboard",getDashboardStats);
export default router;