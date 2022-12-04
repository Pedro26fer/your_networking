import { Request,Response } from "express";
import updateClientService from "../../services/client/updateClient.service";
import { AppError, handleError } from "../../errors/appError";

const updateClientController = async (req: Request, res: Response) => {
    try {
        const userEmail = req.userEmail
        const data = req.body
        await updateClientService(userEmail, data)
        return res.status(204).json({message: "Profile updated successfully"})
    } catch (error) {
        if(error instanceof AppError){
            return handleError(error, res)
        }
    }
}

export default updateClientController