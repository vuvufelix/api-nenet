import { handler } from "./app.js";

handler.listen(3306, () => console.log("SERVIDOR RODANDO NA PORTA 8080"));