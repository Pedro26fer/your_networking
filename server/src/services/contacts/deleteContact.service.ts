import { AppDataSource } from "../../data-source";
import { Clients } from "../../entities/clients.enity";

const deleteContactService = async (userEmail: string, contactId: string) => {
  const clients = AppDataSource.getRepository(Clients);

  const clientOwner = await clients.findOne({ where: { email: userEmail } });

  clientOwner!.contacts = clientOwner!.contacts.filter(
    (contact) => contact.id !== contactId
  );
  await clients.save(clientOwner!);
};

export default deleteContactService;
