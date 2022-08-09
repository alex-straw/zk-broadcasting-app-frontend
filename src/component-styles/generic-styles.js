import styled from 'styled-components';

export const Input = styled.input`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    color: #000;
    border-style: solid;
    border-radius: 3px;
    width: 20vw
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 5vw;
    border-style: solid;
    border-radius: 3px;
    background: white;
    opacity: 0.6;
    transition: 0.3s;
    width: 15vw;
    display: inline-block;


    &:hover {
        border-style: solid;
        opacity: 1;
    }
`;

export const TextBox = styled.h2`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.2;
    background: grey;
    display: inline-block;
    width: 5vw;
    /* width: flex; */
    text-align: center;
`

export const EmailCard = styled.div`
    font-size: 1em;
    margin: 0.5vw;
    margin-left: 5vw;
    padding: 0.5vw;
    border-style: solid;
    border-radius: 3px;
    background: white;
    display: inline-block;
    /* width: flex; */
    width: 42vw;
    text-align: left;
`