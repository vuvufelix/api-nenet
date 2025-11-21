import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./routes.js";
import cors from "cors";
//import ServerlessHttp from "serverless-http";

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

//const box = new App().server;

//export const handler = ServerlessHttp(box);