/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Server } from "../../assets";
import ButtonBase from "../../components/Button";
import { Header } from "../../components/Header/style";
import axios from "axios";
import {
  ButtonsDiv,
  ContactsList,
  ConteinerHome,
  Dashboard,
  DivInHeaderHome,
  SubHeader,
} from "./style";
import { Conteiner } from "../Register/style";
import AddContactModel from "../../components/AddContactModel";
import Contacts from "../../components/Contacts";
import EditContact from "../../components/EditContactModal";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [isAddingContact, setIsAddingContact] = useState(false)
  const [isEditingContact, setIsEditingContact] = useState(false)
  const [editId, setEditId] = useState(null)
  const [attributesContact, setAttributesContact] = useState({})




  const token = localStorage.getItem("token");
  const nameClient = localStorage.getItem("name");
  const emailClient = localStorage.getItem("email")
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/networking", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((res) => {
        setContacts(res.data);
        console.log(res.data);
      })
      .catch((error) => toast.error("Falha ao carregar contatos"));
  }, [token]);

  const handleNavigation = (path) => {
    localStorage.clear();
    return history.push(path);
  };

  const deleteAccount = () => {
    try {
        Server.delete("/delete_account", {headers: {
          "Authorization": `token ${token}`
        }})
        handleNavigation('/')
        toast.success("Conta deletada")
    } catch (error) {
        toast.error("Não foi possível deletar a conta")
    }
  }

  return (
    <>

        <ConteinerHome>
          <Header>
            <DivInHeaderHome>

              <div>
                  <h1 >{nameClient}</h1>
                  <h1>{emailClient}</h1>
              </div>

              <div>
                <h2>
                  You <span>NetWorking</span>
                </h2>
              </div>
              
              <ButtonsDiv>
                <ButtonBase onClick={() => deleteAccount()}>deletar conta</ButtonBase> 
                <ButtonBase onClick={() => handleNavigation("/")}>
                  logout
                </ButtonBase>
              </ButtonsDiv>
            </DivInHeaderHome>
          </Header>
        </ConteinerHome>


        <SubHeader>
          <h2>Contatos Registrados</h2>
          <div>
            <ButtonBase
              blueColor={false}
              onClick={() => setIsAddingContact(true)}
            >
              adicionar
            </ButtonBase>
            <ButtonBase blueColor={false}>PDF</ButtonBase>
          </div>
        </SubHeader>

        {isAddingContact && (
          <AddContactModel
            contacts={contacts}
            setContacts={setContacts}
            setIsAddingContact={setIsAddingContact}
          />
        )}

        {isEditingContact && (
          <EditContact
            contacts={contacts}
            editId={editId}
            setContacts={setContacts}
            setIsEditingContact={setIsEditingContact}
          />
        )}

        <Dashboard>
          {contacts.length > 0 ? (
            <ContactsList>
              {contacts.map((contact, index) => {
                return (
                  <li key={index}>
                    <Contacts
                      contacts={contacts}
                      email={contact.email}
                      name={contact.name}
                      phone={contact.phone}
                      idContact={contact.id}
                      setContacts={setContacts}
                      setIsEditingContact={setIsEditingContact}
                      setEditId={setEditId}
                    />
                  </li>
                );
              })}
            </ContactsList>
          ) : (
            <h2>Adicione contatos para vê-los aqui</h2>
          )}
        </Dashboard>
    </>

  );
}

export default Home;
