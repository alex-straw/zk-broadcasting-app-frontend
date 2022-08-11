import styled from 'styled-components';

export const Input = styled.input`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    color: #000;
    border-style: solid;
    border-radius: 3px;
    width: 40vw
`;

export const LongInput = styled.input`
font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    color: #000;
    border-style: solid;
    border-radius: 3px;
    width: 51vw
`;

export const TinyInput = styled.input`
font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    color: #000;
    border-style: solid;
    border-radius: 3px;
    width: 10vw
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
    opacity: 0.75;
    background: grey;
    display: inline-block;
    width: 5vw;
    text-align: center;
`;

export const LongTextBox = styled.h2`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 5vw;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.75;
    background: grey;
    display: inline-block;
    width: 10vw;
    text-align: center;
`;

export const LongTextBoxDetail = styled.h2`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 5vw;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.75;
    background: grey;
    display: inline-block;
    width: 51vw;
    text-align: center;
`;

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
    width: 62vw;
    text-align: left;
`;

export const ProcessingBox = styled.div`
    font-size: 1em;
    margin: 0.5vw;
    margin-left: 5vw;
    opacity:0.8;
    padding: 0.5vw;
    border-style: solid;
    border-radius: 1px;
    background: #AFE1AF;
    text-align: center;
    width: flex;
    width: 62vw;

    &:hover {
        border-style: solid;
        opacity: 1;
    }
`;


export const Image = styled.img`
    height: 3em;
    width: flex;
`;
