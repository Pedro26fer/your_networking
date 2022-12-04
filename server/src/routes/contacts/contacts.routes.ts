import { Express } from "express";
import createContactController from "../../controllers/contacts/createContacts.controller";
import listContactsController from "../../controllers/contacts/listContacts.controller";
import { isLoggedMiddleware } from "../../middlewares/isLogged.middleware";


export const contactsRoutes = (app: Express) => {

    app.post("/register_contact", isLoggedMiddleware, createContactController)
    app.get("/networking", isLoggedMiddleware, listContactsController)
}