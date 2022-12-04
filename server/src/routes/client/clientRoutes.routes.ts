import { Express } from "express";
import createClientController from "../../controllers/client/createClient.controller";
import listClientController from "../../controllers/client/listClient.controller";
import { isLoggedMiddleware } from "../../middlewares/isLogged.middleware";

export const clientRoutes = (app: Express) => {
  app.post("/register", createClientController);
  app.get("/client", isLoggedMiddleware, listClientController)
};
