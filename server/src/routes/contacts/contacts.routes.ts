import { Express } from "express";
import createContactController from "../../controllers/contacts/createContacts.controller";
import deleteContactController from "../../controllers/contacts/deleteContact.controller";
import listContactsController from "../../controllers/contacts/listContacts.controller";
import updateContactController from "../../controllers/contacts/updateContacts.controller";
import isContactExists from "../../middlewares/isContactExists.middleware";
import { isLoggedMiddleware } from "../../middlewares/isLogged.middleware";


export const contactsRoutes = (app: Express) => {

    app.post("/register_contact", isLoggedMiddleware, createContactController)
    app.get("/networking", isLoggedMiddleware, listContactsController)
    app.delete("/delete_contact/:contactId", isLoggedMiddleware, isContactExists, deleteContactController)
    app.patch("/edit_contact/:contactId", isLoggedMiddleware, updateContactController)
}