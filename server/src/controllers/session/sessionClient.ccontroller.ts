import { Response, Request } from "express";
import { AppError, handleError } from "../../errors/appError";
import sessionClientService from "../../services/sessions/sessionClient.service";

const sessionClientController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const obj = await sessionClientService({ email, password });
    return res.status(200).json(obj);
  } catch (error) {
    if (error instanceof AppError) {
      return handleError(error, res);
    }
  }
};

export default sessionClientController;
