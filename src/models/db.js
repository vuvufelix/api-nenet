import { Sequelize } from "sequelize";

// Conecta o banco de dados
const sequelize = new Sequelize(
    "produto",
    "root",
    "magrelo123",
    {
        host: "localhost",
        dialect: "mysql"
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