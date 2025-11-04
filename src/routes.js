import { Router } from "express";
import Products from "./models/products.js";

const router = new Router();

// Buscar todos os Produtos
router.get("/products", (req, res) => {
    Products.findAll().then((product) => {
        res.json(product);
    }).catch((error) => {
        res.json({message: "Erro ao Listar os produtos " + error});
    });
});

// Buscar Produto por id
router.get("/product/:id", (req, res) => {
    const { id } = req.params;

    Products.findOne({where: {"id": id}}).then((product) => {
        res.json(product);
    }).catch((error) => {
        res.json({message: "Erro ao buscar produto " + error});
    });
});

// Buscar Produto por nome
router.get("/product/search/:name", (req, res) => {
    const { name } = req.params;

    Products.findAll({where: {"name": name}}).then((products) => {
        res.json(products);
    }).catch((error) => {
        res.json({message: "Houve um erro ao pesquisar produto"});
    });
});

// Filtrar por categoria
router.get("/products/:category", (req, res) => {
    const { category } = req.params;

    Products.findAll({where: {"category": category}}).then((product) => {
        res.json(product);
    }).catch((error) => {
        res.json("Erro ao Listar categoria " + error);
    });
});

export default router;