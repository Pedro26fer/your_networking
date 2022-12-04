import { AppDataSource } from "../../data-source";
import { Contacts } from "../../entities/contacts.entity";
import { IContactRequest } from "../../interfaces/contact";
import { Clients } from "../../entities/clients.enity";
import { AppError } from "../../errors/appError";

const createContactService = async (
  userEmail: string,
  { name, email, phone }: IContactRequest
) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const clientsRepository = AppDataSource.getRepository(Clients);

  const user = await clientsRepository.findOne({ where: { email: userEmail } });
  if (!user) {
    throw new AppError(404, "not found");
  }

  const contactAlreadyExistsOnDatabase = await contactRepository.findOne({
    where: { email },
  });

  if (!contactAlreadyExistsOnDatabase) {
    const newContact = await contactRepository.save({
      name,
      email,
      phone,
    });
  }

  const newContact = await contactRepository.findOne({ where: { email } });

  user.contacts = [...user.contacts, newContact!];

  await clientsRepository.save(user);

  return newContact;
};

export default createContactService;
