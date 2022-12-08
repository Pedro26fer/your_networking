import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Server } from "../../assets";
import { Conteiner, ConteinerForm } from "./style";
import FormBase from "../../components/Form";
import ButtonBase from "../../components/Button";
import HeaderBase from "../../components/Header";
import {toast} from 'react-toastify'



function Register(){

    const formSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup.string().required("Campo obrigatório").email("Email inválido"),
        phone: yup.string().required("Campo obrigatório"),
        password: yup.string().required("Campo obrigatório")
    })

    const history = useHistory()

    const handleNavigation = (path) => {
        history.push(path)
    }


    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver( formSchema )
    })

    const onSubmiting = async (data) => {
        console.log(data)

            try {
                const response = await Server.post('/register', data)
                console.log(response.data)
                toast.success("Email cadastrado")
                return handleNavigation('/')
                
            } catch (error) {
                toast.error("Erro ao criar conta. Tente outro email.")
        }
    }
    
    return(
        <>

            <Conteiner>
                <HeaderBase>
                    <h1>You <span>Networking</span></h1>
                    <ButtonBase onClick={() => handleNavigation('/')}>login</ButtonBase>
                </HeaderBase>

                <div>
                    <span>Valorizamos seus contatos. Faça seu cadastro</span>
                </div>
            </Conteiner>
            <ConteinerForm>
                <FormBase onSubmit={handleSubmit(onSubmiting)}>
                    <label htmlFor="name">Nome {errors.name && (<span> - {errors.name.message}</span>)}</label>
                    <input type="text" id="name" placeholder="Digite seu nome" {...register("name")}/>

                    <label htmlFor="email">E-mail {errors.email && (<span> - {errors.email.message}</span>)}</label>
                    <input type="text" id="email" placeholder="Digite um email válido" {...register("email")}/>

                    <label htmlFor="phone">Telefone {errors.phone && (<span> - {errors.phone.message}</span>)}</label>
                    <input type="text" id="phone" placeholder="Digite um telefone de contato" {...register("phone")}/>

                    <label htmlFor="password">Senha {errors.password && (<span> - {errors.password.message}</span>)}</label>
                    <input type="password" id="password" placeholder="Cadastre uma senha forte" {...register("password")} />

                    <div>
                        <ButtonBase type="submit" blueColor={false}>Cadastrar</ButtonBase>
                    </div>
                </FormBase>
            </ConteinerForm>

        
        </>
    )
}

export default Register
