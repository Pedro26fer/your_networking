import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.enity";
import { AppError } from "../../errors/appError";

const listContactsService = async (userEmail: string) => {
  const clientsRepository = AppDataSource.getRepository(Clients);

  const client = await clientsRepository.findOne({
    where: { email: userEmail },
  });
  if (!client) {
    throw new AppError(404, "not found");
  }

  const contacts = client.contacts;

  return contacts;
};

export default listContactsService;
