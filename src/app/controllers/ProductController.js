import Products from "../../models/products.js";

class ProductController {

    // Buscar todos os Produtos
    index(req, res) {
        Products.findAll().then((product) => {
            res.json(product);
        }).catch((error) => {
            res.json({message: "Erro ao Listar os produtos " + error});
        });
    };

    // Buscar Produto por id
    show(req, res) {
        const { id } = req.params;

        Products.findOne({where: {"id": id}}).then((product) => {
            res.json(product);
        }).catch((error) => {
            res.json({message: "Erro ao buscar produto " + error});
        });
    };

    // Buscar Produto por nome
    search(req, res) {
        const { name } = req.params;

        Products.findAll({where: {"name": name}}).then((products) => {
            res.json(products);
        }).catch((error) => {
            res.json({message: "Houve um erro ao pesquisar produto"});
        });
    };

    // Filtrar por categoria
    filterCategory(req, res) {
        const { category } = req.params;

        Products.findAll({where: {"category": category}}).then((product) => {
            res.json(product);
        }).catch((error) => {
            res.json("Erro ao Listar categoria " + error);
        });
    };

}

export default new ProductController();