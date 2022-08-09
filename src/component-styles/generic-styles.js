import styled from 'styled-components';

export const Input = styled.input`
    font-size: 1em;
    padding: 0.5em;
    margin: 0.5em;
    color: #000;
    border-style: solid;
    border-radius: 3px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
    font-size: 1em;
    margin: 0.5em;
    padding: 0.5em;
    border-style: solid;
    border-radius: 3px;
    background: white;
    opacity: 0.6;
    transition: 0.3s;
    width: 20vw;

    &:hover {
        border-style: solid;
        opacity: 1;
    }
`;

export const TextBox = styled.h2`
    font-size: 1em;
    margin: 0.5em;
    padding: 0.5em;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.2;
    background: grey;
    display: inline-block;
    width: 5vw;
    /* width: 50px; */
    text-align: center;
`

export const EmailCard = styled.div`
    font-size: 1em;
    margin: 0.5em;
    padding: 0.5em;
    border-style: solid;
    border-radius: 3px;
    background: white;
    display: inline-block;
    width: flex;
    /* width: 50px; */
    text-align: center;
`