import { Express } from "express";
import sessionClientController from "../../controllers/session/sessionClient.ccontroller";

export const sessionRoutes = (app: Express) => {

    app.post("/login", sessionClientController)
}