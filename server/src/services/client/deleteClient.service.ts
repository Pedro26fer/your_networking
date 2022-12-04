import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.enity";
import { AppError } from "../../errors/appError";

const deleteClientService = async (userEmail: string) => {
  const clientsRepository = AppDataSource.getRepository(Clients);

  const deletedClient = await clientsRepository.findOne({
    where: { email: userEmail },
  });
  console.log(deletedClient);
  if (!deletedClient) {
    throw new AppError(404, "Account not found");
  }

  await clientsRepository.delete(deletedClient.id);

  return true;
};

export default deleteClientService;
