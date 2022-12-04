import { Response, Request } from "express";
import listContactsService from "../../services/contacts/listContacts.service";
import { AppError, handleError } from "../../errors/appError";

const listContactsController = async (req: Request, res: Response) => {
  try {
    const userEmail = req.userEmail;
    const contacts = await listContactsService(userEmail);
    return res.status(200).json(contacts);
  } catch (error) {
    if (error instanceof AppError) {
      return handleError(error, res);
    }
  }
};

export default listContactsController;
