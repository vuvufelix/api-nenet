import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

// Conecta o banco de dados
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        port: process.env.DB_PORT,
        dialectOptions: {
            connectTimeout: 10000,
        },
        logging: false
    }
);

sequelize.authenticate().then(() => {
    console.log("Banco de dados conectado com sucesso");
}).catch((error) => {
    console.log("Houve um erro ao se conectar com o banco de dados" + error);
});

export {
    Sequelize,
    sequelize
}