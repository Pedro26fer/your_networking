import { Response, Request } from "express";
import updateContactsService from "../../services/contacts/updateContact.service";
import { AppError, handleError } from "../../errors/appError";


const updateContactController = async(req: Request, res: Response) => {
    try {
        const userEmail = req.userEmail
        const data = req.body
        const {contactId} = req.params
        await updateContactsService(userEmail,contactId,data)
        return res.status(206).json({message: "Contact updated successfully"})
    } catch (error) {
        if(error instanceof AppError){
            return handleError(error, res)
        }
    }

}

export default updateContactController