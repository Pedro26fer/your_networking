import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import listClientService from "../../services/client/listClient.service";

const listClientController = async (req: Request, res: Response) => {
  try {
    const userEmail = req.userEmail;

    const client = await listClientService(userEmail);
    return res.status(200).json(client);
  } catch (error) {
    if (error instanceof AppError) {
      return handleError(error, res);
    }
  }
};

export default listClientController;
