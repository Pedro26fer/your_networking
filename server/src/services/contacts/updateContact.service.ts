import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Clients } from "../../entities/clients.enity";
import { Contacts } from "../../entities/contacts.entity";



const updateContactsService = async (userEmail: string, contactId: string, data: any) => {

    const clientsRepository = AppDataSource.getRepository(Clients)
    const contactsRepository = AppDataSource.getRepository(Contacts)

    const contact = await contactsRepository.findOne({where: {id: contactId}})
    const client = await clientsRepository.findOne({where: { email: userEmail}})


    if(!client){
        throw new AppError(404, "Client not found")
    }

    if(!contact){
        throw new AppError(404, "Contact not found")
    }

    await contactsRepository.update(contact.id, data)
    
    return true

}

export default updateContactsService