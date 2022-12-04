import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.enity";
import { AppError } from "../../errors/appError";


const listClientService = async (userEmail: string) => {
    const clientsRepository = AppDataSource.getRepository(Clients)

    const client = await clientsRepository.findOne({where: {email: userEmail}})
    return client 
}


export default listClientService