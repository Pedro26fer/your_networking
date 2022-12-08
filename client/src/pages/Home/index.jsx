/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Server } from "../../assets";
import ButtonBase from "../../components/Button";
import { Header } from "../../components/Header/style";
import axios from "axios";
import {
  ContactsList,
  Dashboard,
  DivInHeaderHome,
  SubHeader,
} from "./style";
import { Conteiner } from "../Register/style";
import AddContactModel from "../../components/AddContactModel";
import Contacts from "../../components/Contacts";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [isAddingContact, setIsAddingContact] = useState(false);

  const token = localStorage.getItem("token");
  const nameClient = localStorage.getItem("name");
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

  return (
    <>

        <Conteiner>
          <Header>
            <DivInHeaderHome>
              <h2>
                You <span>NetWorking</span>
              </h2>

              <div>
                <h1>{nameClient}</h1>
                <ButtonBase onClick={() => handleNavigation("/")}>
                  logout
                </ButtonBase>
              </div>
            </DivInHeaderHome>
          </Header>
        </Conteiner>

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
