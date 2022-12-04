import { Request, Response, NextFunction } from "express";
import { AppError, handleError } from "../errors/appError";
import { Contacts } from "../entities/contacts.entity";
import { AppDataSource } from "../data-source";


export const isContactExists = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const {contactId} = req.params

        const contactsRepository = AppDataSource.getRepository(Contacts)
        const contactFound = await contactsRepository.findOne({where: {id: contactId}})
        if(!contactFound){
            throw new AppError(404, "Contact not found")
        }

        next()
        
    } catch (error) {
        if(error instanceof AppError){
            return handleError(error, res)
        }
    }
}

export default isContactExists