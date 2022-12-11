import styled from "styled-components";

export const DivInHeaderHome = styled.div`

display: flex;
flex-direction: row;

div{
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-top: 1vh;

}


  h1 {
    font-size: 1.2rem;
    color: #000072;
  }

  h2 {
    color: #000072;
  }


`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 66vw;

  h2 {
    font-size: 1.3rem;
    font-family: cursive;
    color: #ffbf00;
  }

  div {
    width: 10%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;

export const Dashboard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 80vw;
  height: 55vh;
  overflow-y: auto;
  margin-top: 20px;
  margin-left: 40px;

  border: 0.5px solid #c6c6c6;
  border-radius: 4px;

  background-color: #fff;

  h2 {
    font-family: cursive;
    color: #000072;
  }
`;

export const ContactsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 95%;
  gap: 25px;
`;

export const ButtonsDiv = styled.div`

  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  width: 90%;
`

export const ConteinerHome = styled.div`

    border-bottom: 1px solid #c6c6c6;
    padding-bottom: 5vh;
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-bottom: 2vh;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        font-size: larger;
        font-family: cursive;
    }

`



