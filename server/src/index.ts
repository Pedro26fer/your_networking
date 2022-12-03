import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appError";
import { clientRoutes } from "./routes/client/clientRoutes.routes";
import { AppDataSource } from "./data-source";
import { sessionRoutes } from "./routes/sessions/login.routes";
const app = express();

app.use(express.json());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);


clientRoutes(app);
sessionRoutes(app)

AppDataSource.initialize()
  .then(() => console.log("Database inicializado com sucesso"))
  .catch((err) => console.log("Erro na conecção com o banco", err));

app.listen(3000, () => {
  console.log("Api rodando");
});
