import resgisterClientService from "../../services/client/createClient.service";
import { AppError, handleError } from "../../errors/appError";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

const createClientController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newClient = await resgisterClientService({ name, email, password });
    return res.status(201).json(instanceToPlain(newClient));
  } catch (error) {
    if (error instanceof AppError) {
      return handleError(error, res);
    }
  }
};

export default createClientController;
