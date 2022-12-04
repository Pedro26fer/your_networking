import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.enity";
import bcrypt from 'bcrypt'
import { ILoggin } from "../../interfaces/session";
import jwt from 'jsonwebtoken'
import { AppError } from "../../errors/appError";


const sessionClientService = async ({email, password}: ILoggin) => {

    const clientRepository = AppDataSource.getRepository(Clients)

    const emailRegistered = await clientRepository.findOne({where: {email}})
    if(!emailRegistered){
        throw new AppError(404, "email/passaword invalid")
    }


    const acceptPassword = bcrypt.compareSync(password, emailRegistered!.password)
    if(!acceptPassword){
        throw new AppError(404, "email/passaword invalid")
    }

    const token = jwt.sign({email}, String(process.env.JWT_SECRET), {expiresIn: '24h'})

    return token
}

export default sessionClientService