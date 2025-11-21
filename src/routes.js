import { Router } from "express";
import ProductController from "./app/controllers/ProductController.js";

const router = new Router();

router.get("/", (req, res) => {
    res.json({message: "API rodando conectado com o clever cloud!"})
})
router.post("/create-checkout-session", ProductController.checkoutSession)
router.get("/products", ProductController.index);
router.get("/product/:id", ProductController.show);
router.get("/product/search/:name", ProductController.search);
router.get("/products/:category", ProductController.filterCategory);

export default router;