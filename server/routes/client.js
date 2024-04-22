import express from "express";
import { getProducts,getCustomers,getTransactions} from "../controllers/client.js";
const router =express.Router();

router.get("/products",getProducts);
router.get("/customers",getCustomers);
router.post("/transactions",getTransactions);

export default router;