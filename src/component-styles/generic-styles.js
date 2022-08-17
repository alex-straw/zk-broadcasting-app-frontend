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
    width: 10.5vw
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 5vw;
    border-style: solid;
    border-width: 3px;
    border-color: black;
    background: white;
    border-radius: 5px;
    transition: 0.3s;
    width: 15vw;
    display: inline-block;


    &:hover {
        background:#5CC8FF;
        border-style: solid;
    }
`;

export const SmallButton = styled.button`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 5vw;
    border-style: solid;
    border-width: 3px;
    border-color: black;
    background: white;
    border-radius: 5px;
    display: inline-block;
    vertical-align:top;
    width: 10vw;
    transition: 0.3s;
    text-align: center;

    &:hover {
        border-style: solid;
        background:#5CC8FF;
    }
`

export const LongerButton = styled.button`
  /* Adapt the colors based on primary prop */
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-width: 3px;
    border-color: black;
    background: white;
    border-radius: 3px;
    opacity: 0.6;
    transition: 0.3s;
    width: 35vw;

    &:hover {
        border-style: solid;
        opacity: 1;
        background:#5CC8FF;
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

export const MidTextBox = styled.h2`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.75;
    background: grey;
    display: inline-block;
    width: 34.5vw;
    text-align: center;
`;

export const LongTextBoxForOutput = styled.h2`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 5vw;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.75;
    background: grey;
    display: inline-block;
    vertical-align:top;
    width: 10vw;
    text-align: center;
`;

export const LongTextBoxDetail = styled.h2`
    font-size: 1em;
    padding: 0.5vw;
    margin-left: 5vw;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.75;
    background: grey;
    display: inline-block;
    vertical-align:middle;
    width: 51vw;
    text-align: center;
`;

export const HyperLink = styled.h2`
    font-size: 1em;
    padding: 0.5vw;
    margin-left: 5vw;
    border-style: solid;
    border-radius: 3px;
    opacity: 0.75;
    background: white;
    display: inline-block;
    vertical-align:middle;
    width: 62vw;
    text-align: center;

    &:hover {
        border-style: solid;
        opacity: 1;
        cursor: copy;
        background: #5CC8FF;
    }
`;

export const LongTextBoxDetailNoMargin = styled.h2`
    font-size: 1em;
    border-style: solid;
    margin: 0.5vw;
    padding: 0.5vw;
    border-radius: 3px;
    opacity: 0.75;
    background: white;
    display: inline-block;
    width: 51vw;
    text-align: center;
    word-wrap: break-word;
    margin-bottom: 0;

    &:hover {
        border-style: solid;
        opacity: 1;
        cursor: copy;
        background: #F5F5F5;
    }
`;

export const MidTextBoxDetail = styled.h2`
    font-size: 1em;
    margin: 0.5vw;
    padding: 0.5vw;
    margin-left: 5vw;
    height: 3em;
    border-style: solid;
    border-radius: 1px;
    opacity: 0.75;
    background: white;
    display: inline-block;
    text-align: center;
    opacity: 0.8;
    overflow: auto;
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