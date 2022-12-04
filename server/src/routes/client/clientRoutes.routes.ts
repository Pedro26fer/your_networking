import { Express } from "express";
import createClientController from "../../controllers/client/createClient.controller";
import deleteClientController from "../../controllers/client/deleteClient.controller";
import listClientController from "../../controllers/client/listClient.controller";
import updateClientController from "../../controllers/client/updateClient.controller";
import { isLoggedMiddleware } from "../../middlewares/isLogged.middleware";

export const clientRoutes = (app: Express) => {
  app.post("/register", createClientController);
  app.get("/client", isLoggedMiddleware, listClientController);
  app.delete("/delete_account", isLoggedMiddleware, deleteClientController)
  app.patch("/edit_account", isLoggedMiddleware, updateClientController)
};
