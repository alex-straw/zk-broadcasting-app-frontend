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

export const LongerButton = styled.button`
  /* Adapt the colors based on primary prop */
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-radius: 3px;
    background: white;
    opacity: 0.6;
    transition: 0.3s;
    width: 35vw;

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

export const MidTextBoxDetail = styled.h2`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 5vw;
    height: 4em;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.75;
    background: white;
    display: inline-block;
    text-align: center;
    opacity: 0.8;
    word-wrap: break-word;
    inline-size: 62vw;


    &:hover {
        border-style: solid;
        opacity: 1;
        cursor: copy;
        background: #F5F5F5;
    }
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
    padding: 1vw;
    border-radius: 1em;
    border-style: solid;
    background: #000;
    color: #fff;
    opacity: 1;
    text-align: center;
    width: flex;
    width: 62vw;
    transition: 0.3s;

    &:hover {
        border-style: none;
        opacity: 0.1;
    }
`;


export const Image = styled.img`
    height: 3em;
    width: flex;
`;

export const textBlock = styled.div`
    white-space: pre;
`