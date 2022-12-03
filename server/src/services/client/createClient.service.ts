import { IClientRequest } from "../../interfaces/client";
import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.enity";
import { AppError } from "../../errors/appError";


const resgisterClientService = async ({name, email} : IClientRequest) => {

    const clientRepository = AppDataSource.getRepository(Clients)

    const clientAlreadyExists = await clientRepository.findOne({where: {email}})
    if(clientAlreadyExists){
        throw new AppError(403, "This email is already being used!")
    }

    const newClient = {
        name,
        email
    }

    await clientRepository.save(newClient)

    return newClient

}

export default resgisterClientService