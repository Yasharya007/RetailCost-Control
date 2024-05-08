import express from "express";
import { addTransaction ,addProduct} from "../controllers/management.js";
import { upload } from "../middleware/multer.js";
import { verifyJWT } from "../middleware/auth.js";
const router =express.Router();

router.post("/addTransaction",upload.none(),verifyJWT,addTransaction);
router.post("/addProduct",upload.none(),verifyJWT,addProduct);

export default router;