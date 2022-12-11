import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { AppError } from "../../errors/appError";

const retrieveContactService = async (contactId: string) => {

    const contactsRepository = AppDataSource.getRepository(Contacts)

    const contact = await contactsRepository.findOne({where: {id : contactId}})

    if (!contact){
        throw new AppError(404, "Contact not exists")
    }

    return contact

}


export default retrieveContactService