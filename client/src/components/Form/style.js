import styled from "styled-components";

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    width: ${(props) => props.modalForm? "90%" : "35vw"};
    gap: 17px;
    padding: 15px;
    border: 2px solid #000072;
    border-radius: 6px;

    background-color: #fff;

    font-family: cursive;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input{
        padding: 5px;
        height: 1.5rem;
        :focus{
            outline-style: solid;
            outline-color: #ffbf00;
        }


    }
    
    span{
        font-size: 0.8rem;
        color: #f13000;
    }

`