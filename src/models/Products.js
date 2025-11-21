import { sequelize, Sequelize } from "./db.js";

const Products = sequelize.define("product", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Forçar a criação do banco de dados
Products.sync({force: false});

export default Products;