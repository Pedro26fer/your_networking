import styled from "styled-components";

export const Button = styled.button`

    color: ${(props) => props.blueColor? "#000072" : "#fff"};
    background-color: ${(props) => props.blueColor? "#fff" : "#000072"};
    font-family: cursive;
    font-weight: 600;
    padding: 4px;
    border: ${(props) => props.blueColor? "2px solid" : "none" };
    border-color: ${(props) => props.blueColor? "#000072" : "none" };
    border-radius: 5px;

    cursor: pointer;
    

    width: 10rem;

`