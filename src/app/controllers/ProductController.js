import Products from "../../models/products.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

class ProductController {

    async checkoutSession(req, res) {
        try {
            const { AllProducts } = req.body;

            //const products = JSON.parse(AllProducts)

            // Lista os produtos adicionados ao carrinho
            const lineItems = AllProducts.map((product) => ({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                    },
                    unit_amount: product.price * 100,
                },
                quantity: product.quantity || 1
            }));

            // Cria uma nova sessão de pagamento!
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "payment",
                line_items: lineItems,
                success_url: 'http://localhost:5173/success',
                cancel_url: 'http://localhost:5173/cancel'
            });

            res.json({ url: session.url })
        } catch {
            res.status(500).json({message: "Erro ao criar pagamento"});
        }
    }

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