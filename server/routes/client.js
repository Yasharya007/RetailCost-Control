import express from "express";
import { getProducts,getCustomers,getTransactions,getGeography} from "../controllers/client.js";
import { verifyJWT } from "../middleware/auth.js";
const router =express.Router();

router.get("/products",getProducts);
router.get("/customers",getCustomers);
router.post("/transactions",getTransactions);
router.get("/geography",getGeography);

export default router;