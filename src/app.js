import express from "express";
import router from "./routes.js";

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
    }
}

export default new App().server;