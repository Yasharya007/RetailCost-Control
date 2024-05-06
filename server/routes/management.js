import express from "express";
import { addTransaction } from "../controllers/management.js";
import { upload } from "../middleware/multer.js";
import { verifyJWT } from "../middleware/auth.js";
const router =express.Router();

router.post("/addTransaction",upload.none(),verifyJWT,addTransaction);

export default router;