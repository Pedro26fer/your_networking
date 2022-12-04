import { Response, Request } from "express";
import createContactService from "../../services/contacts/createContact.service";
import { AppError, handleError } from "../../errors/appError";

const createContactController = async (req: Request, res: Response) => {
  try {
    const userEmail = req.userEmail;
    const { name, email, phone } = req.body;

    const newContact = await createContactService(userEmail, {
      name,
      email,
      phone,
    });

    return res.status(201).json(newContact);
  } catch (error) {
    if (error instanceof AppError) {
      return handleError(error, res);
    }
  }
};

export default createContactController;
