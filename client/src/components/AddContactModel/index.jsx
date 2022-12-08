import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm  } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Server } from '../../assets'
import { BackGroundModal, Modal } from './style'
import ButtonBase from '../Button'
import FormBase from '../Form'



function AddContactModel({setIsAddingContact, setContacts, contacts}){

    const token = localStorage.getItem('token')

    const addSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatótrio"),
        email: yup.string().required('Campo obrigatório').email("Digite um email válido"),
        phone: yup.string().required("Campo obrigatório")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver( addSchema )
    })

    const submiting = async (data) => {

        try {
            const response = await Server.post('/register_contact', data, { headers: {"Authorization": `token ${token}`}})
            console.log(response.data)

            const newContacts = [...contacts, response.data]
            setContacts(newContacts)
            setIsAddingContact(false)
            toast.success("Networking feito!!")

        } catch (error) {
            toast.error("Falha ao adicionar o contato")
        }
    }
   

    return(
        <BackGroundModal>
            <Modal>
                <header>
                    <h2>Cadastrar Contato</h2>
                    <ButtonBase onClick={() => setIsAddingContact(false)} >fechar</ButtonBase>
                </header>    

                <FormBase onSubmit={handleSubmit(submiting)} modalForm={true}>

                    <label htmlFor="name">Nome {errors.name && (<span>- {errors.name.message}</span>)}</label>
                    <input type="text" id='name' placeholder='Quem você quer adicionar?' {...register('name')} />
                
                    <label htmlFor="email">E-mail {errors.email && (<span>- {errors.email.message}</span>)}</label>
                    <input type="text" id='email' placeholder='Digite o e-mail' {...register('email')} />
                
                    <label htmlFor="phone">Telefone de contato{errors.phone && (<span>- {errors.phone.message}</span>)}</label>
                    <input type="text" id='phone' placeholder='Digite um telefone válido' {...register('phone')} />

                    <div>
                        <ButtonBase type="submit" blueColor={false}>Adicionar</ButtonBase>
                    </div>

                </FormBase>

            </Modal>
        </BackGroundModal>
    )
}


export default AddContactModel