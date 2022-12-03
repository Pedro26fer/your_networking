import { Express } from "express";
import createClientController from "../../controllers/client/createClient.controller";

export const clientRoutes = (app: Express) => {
  app.post("/register", createClientController);
};
