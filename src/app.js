import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./routes.js";
import cors from "cors";

class App {
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
        this.Server();
    }

    routes() {
        this.server.use(router);
    }

    middleware() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    Server() {
        this.server.listen(process.env.DB_PORT, () => console.log("SERVIDOR RODANDO!"));
    }
}

new App();