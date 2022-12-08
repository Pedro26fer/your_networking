import resgisterClientService from "../../services/client/createClient.service";
import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";


const createClientController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;
    const newClient = await resgisterClientService({ name, email, password, phone });
    return res.status(201).json(newClient);
  } catch (error) {
    if (error instanceof AppError) {
      return handleError(error, res);
    }
  }
};

export default createClientController;
