import { AppError, handleError } from "../../errors/appError";
import retrieveContactService from "../../services/contacts/retrieveContact.service";
import { Request, Response } from "express";


const retireveContactController = async(req: Request, res: Response) => {
    try {

        const {contactId} = req.params
        const contact = await retrieveContactService(contactId)
        return res.status(200).json(contact)
        
    } catch (error) {
        if(error instanceof AppError){
            return handleError(error, res)
        }
    }
}

export default retireveContactController