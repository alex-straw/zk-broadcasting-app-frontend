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

export const WhiteText = styled.div`
    font-size: 1em;
    text-align: justify;
    margin-left: 25vw;
    width: 50vw;
    word-wrap: break-word;
    color:white;
`;

export const CenterComponent = styled.section`
    margin: auto;
    width: 75vw;
    padding: 10px;
`

export const TextWrapper = styled.div`
    padding: 1em;
    background: white;
    margin-left:12vw;
    width: 50vw;
    text-align: justify;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
`

export const VerticalGap = styled.section`
    padding:1em;
    height: 50px
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
    background-size: cover;
    background-color: black;
    background-position: center;
`

export const LargeImage = styled.img`
    height: 30vw;
    margin-left: 30vw;
`