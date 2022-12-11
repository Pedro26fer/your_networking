import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { Server } from "../../assets";
import FormBase from "../../components/Form";
import ButtonBase from "../../components/Button";
import { toast } from "react-toastify";
import HeaderBase from "../../components/Header";
import { Conteiner, ConteinerForm } from "../Register/style";

function Login() {

  const history = useHistory()

  const handleNavigation = (path) => {
     history.push(path)
  };

  const formSchema = yup.object().shape({
    email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
    password: yup.string().required('Campo obrigatório')
  });

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver( formSchema )
  })

  const onSubmiting = async (data) => {

      console.log(data)
      try {
        const response = await Server.post('/login', data)
        console.log(response.data)
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("name", response.data.name)
        localStorage.setItem('email', data.email)
        toast.success("Bem vindo ao You Networking")
        return handleNavigation("/home")        
      } 
      catch (error) {
        toast.error('E-mail/senha inválidos')
      }

  }

  return(
    <>
        <Conteiner>
            <HeaderBase>
                <h1><span>You</span> Networking</h1>
                <ButtonBase blueColor={false} onClick={() => handleNavigation('/registering')}>Cadastro</ButtonBase>    
            </HeaderBase>
            <div>
                <span>Não tem login? Faça cadastro na nossa plataforma</span>
            </div>  
        </Conteiner>
        <ConteinerForm>
            <FormBase onSubmit={handleSubmit(onSubmiting)}>
              <label htmlFor="email">E-mail {errors.email && (<span> - {errors.email.message}</span>)}</label>
              <input type="text" id="email" placeholder="Digite um email válido" {...register("email")}/>

              <label htmlFor="password">Senha {errors.password && (<span> - {errors.password.message}</span>)}</label>
              <input type="password" id="password" placeholder="Cadastre uma senha forte" {...register("password")} />

              <div>
                <ButtonBase type='submit'>log-in</ButtonBase> 
              </div>

            </FormBase>

        </ConteinerForm>

    </>
  )


}



export default Login
