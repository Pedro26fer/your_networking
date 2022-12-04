import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.enity";
import { AppError } from "../../errors/appError";

const listClientService = async (userEmail: string) => {
  const clientsRepository = AppDataSource.getRepository(Clients);

  const client = await clientsRepository.findOne({
    where: { email: userEmail },
  });
  if (!client) {
    throw new AppError(404, "Client not found");
  }
  return client;
};

export default listClientService;
