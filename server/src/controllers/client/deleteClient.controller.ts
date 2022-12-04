import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import deleteClientService from "../../services/client/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
  try {
    const userEmail = req.userEmail;
    await deleteClientService(userEmail);
    return res.status(204).json("Account deleted");
  } catch (error) {
    if (error instanceof AppError) {
      return handleError(error, res);
    }
  }
};

export default deleteClientController;
