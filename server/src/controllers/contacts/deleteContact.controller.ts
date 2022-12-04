import { Response, Request } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";
import { AppError, handleError } from "../../errors/appError";

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const userEmail = req.userEmail;
    const { contactId } = req.params;
    await deleteContactService(userEmail, contactId);
    return res.status(201).json({ message: "contact deleted" });
  } catch (error) {
    if (error instanceof AppError) {
      return handleError(error, res);
    }
  }
};

export default deleteContactController;
