import express from "express";
import { getProducts,getCustomers,getTransactions,getGeography} from "../controllers/client.js";
import { verifyJWT } from "../middleware/auth.js";
const router =express.Router();

router.get("/products",verifyJWT,getProducts);
router.get("/customers",verifyJWT,getCustomers);
router.post("/transactions",verifyJWT,getTransactions);
router.get("/geography",verifyJWT,getGeography);

export default router;