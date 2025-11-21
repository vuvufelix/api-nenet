import dotenv from "dotenv";
dotenv.config();
import express from "express";
import router from "./routes.js";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);

server.listen(process.env.DB_PORT, () => console.log("servidor rodando!"));