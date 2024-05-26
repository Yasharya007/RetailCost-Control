import express from "express";
import {getSales} from "../controllers/sales.js"
import { verifyJWT } from "../middleware/auth.js";
const router =express.Router();
router.get("/sales",verifyJWT,getSales)
export default router;