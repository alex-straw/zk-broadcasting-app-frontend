import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 1em;
    background: white;
    margin: 5;
    width: 100%;
    height: 80%;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    line-height: 100px;
`;

export const WhiteTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    line-height: 100px;
    color:white;
`;

export const CenterComponent = styled.section`
    margin: auto;
    width: 75vw;
    padding: 10px;
`

export const VerticalGap = styled.section`
    padding:1em;
    background:white;
    height: 5%
`

export const TextBlock = styled.div`
    font-size: 1em;
    margin: 0.5vw;
    margin-left: 10vw;
    text-align: left;
    word-wrap: break-word;
    width: 45vw;
    display: inline-block;
    text-align: left;
`;

export const BlackFullScreen = styled.section`
    background-repeat: no-repeat;
    background-size: contain;
    width: 100vw;
    height: 100vh;
    background-color: black;
`

export const LargeImage = styled.img`
    height: 30vw;
    margin-left: 30vw;
`