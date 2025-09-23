import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import { errorMiddleware } from "./middlewares/error.middleware";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use(router);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})