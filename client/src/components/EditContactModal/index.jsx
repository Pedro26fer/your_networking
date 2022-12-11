import { useForm } from "react-hook-form";
import { Server } from "../../assets";
import { toast } from "react-toastify";
import FormBase from "../Form";
import ButtonBase from "../Button";
import { BackGroundModal, Modal } from "../AddContactModel/style";

function EditContact({ setIsEditingContact, editId, contacts, setContacts}) {
  const token = localStorage.getItem("token");


  const {
    register,
    handleSubmit,
  } = useForm();

  const submiting = async (data) => {
    try {
      const response = await Server.patch(`/edit_contact/${editId}`, data, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      console.log(response.data);
      setIsEditingContact(false);
      window.location.reload(true)
      toast.success("Contato editado");
    } catch (error) {
      toast.error("Não foi possível editar o contato");
    }
  };

  return (
    <BackGroundModal>
      <Modal>
        <header>
          <h2>Editar Contato</h2>
          <ButtonBase onClick={() => setIsEditingContact(false)}>
            fechar
          </ButtonBase>
        </header>

        <FormBase onSubmit={handleSubmit(submiting)}>
          <label htmlFor="name">
            Editar nome 
          </label>
          <input
            type="text"
            id="name"
            placeholder="Quem você quer editar?"
            {...register("name")}
          />
          <div>
            <ButtonBase type="submit" blueColor={false}>
              Editar
            </ButtonBase>
          </div> 
        </FormBase>

        <FormBase onSubmit={handleSubmit(submiting)}>
          <label>
             Editar E-mail
          </label>
          <input
            type="text"
            id="email"
            placeholder="Digite o e-mail"
            {...register("email")}/>

          <div>
            <ButtonBase type="submit" blueColor={false}>
              Editar
            </ButtonBase>
          </div>
        </FormBase>

        <FormBase onSubmit={handleSubmit(submiting)}>
          <label htmlFor="phone">
            Editar telefone de contato
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Digite um telefone válido"
            {...register("phone")}/>

          <div>
            <ButtonBase type="submit" blueColor={false}>
              Editar
            </ButtonBase>
          </div>

        </FormBase>

      </Modal>
    </BackGroundModal>
  );
}

export default EditContact;
