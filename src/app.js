import express from "express";
import router from "./routes.js";
import cors from "cors";

class App {
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    routes() {
        this.server.use(router);
    }

    middleware() {
        this.server.use(express.json());
        this.server.use(cors());
    }
}

export default new App().server;