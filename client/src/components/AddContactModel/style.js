import styled from "styled-components";


export const BackGroundModal = styled.div`

width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    background-color: rgba(0,0,0,.9);
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-radius: 5px;


 
    width: 40vw;
    height: 80vh;

    header{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-between;

        border-bottom: 1px dotted #c6c6c6;
        
        h2{
            color: #000072 ;
            font-family: cursive;
            font-size: 1.3rem;
        }

        button{
            padding: 2px;
            height: 2rem;
            width: 3.5rem;
        }

    }

    `