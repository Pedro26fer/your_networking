import { Response, Request } from "express";
import listClientService from "../../services/client/listClient.service";

const listClientController = async (req: Request, res: Response) => {
    const userEmail = req.userEmail

    const client = await listClientService(userEmail)
    return res.status(200).json(client)
}

export default listClientController