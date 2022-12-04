import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { Clients } from "../../entities/clients.enity";
import bcrypt from 'bcrypt'


const updateClientService = async (userEmail: string, data: any) => {
    const clientRepository = AppDataSource.getRepository(Clients)
    console.log(data)

    const client = await clientRepository.findOne({where: {email: userEmail}})
    if(!client){
        throw new AppError(404, "client no found")
    }

    if(data.password){
        data.password = await bcrypt.hash(data.password, 10)
    }

    await clientRepository.update(client.id, data)

    return true
}


export default updateClientService