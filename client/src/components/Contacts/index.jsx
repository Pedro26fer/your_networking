import { toast } from "react-toastify"
import { Server } from "../../assets"
import ButtonBase from "../Button"
import { ContactInformations } from "./style"




function Contacts({idContact, name, email, phone, contacts, setContacts, setIsEditingContact, setEditId}){

    const token = localStorage.getItem('token')

    const deleteContact = async () => {
        try {

                await Server.delete(`/delete_contact/${idContact}`, {headers: { 'Authorization': `token ${token}`}})
                .then(() => {
                    const oldContacts = contacts.filter((contact) => contact.id !== idContact)
                    setContacts(oldContacts)
                    toast.success("Contato excluído com sucesso")
                  })
            
        } catch (error) {
            toast.error('Falha ao deletar o contato')
        }
    }

    const editingContact = async () => {
        setEditId(idContact)
        setIsEditingContact(true) 

    }

    return(

        <ContactInformations>
            <h2>Nome: {name}</h2>
            <span><b>E-mail de contato:</b> {email}</span>
            <span><b>Telefone:</b> {phone}</span>

            <ButtonBase blueColor={false} onClick={() => {editingContact(true)}}>editar</ButtonBase>
            <ButtonBase onClick={() => deleteContact()}>excluir</ButtonBase>

        </ContactInformations>
    )
}

export default Contacts