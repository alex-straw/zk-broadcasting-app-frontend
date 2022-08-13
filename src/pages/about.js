import React from 'react';
import { WhiteTitle, WhiteText, BlackFullScreen, VerticalGap } from "../component-styles/layout-styles"
import { LargeImage } from "../component-styles/layout-styles"
import loading from '../images/7S7P.gif'


const About = () => {
    return (
    <BlackFullScreen>
        <WhiteTitle>
            <pre>
                Generating Proof {"\n"} This could take up to 5 minutes.
            </pre>
        </WhiteTitle>
        <WhiteText> 
            What's going on, and why is this so slow? A generic protocol proving key (53MB) has been downloaded into your browser's memory.
            Your computer is currently creating a proof that you posess the hashed version of your private pre-image/password. The hashed 
            version of your pre-image is on the blockchain, and this is secure because it is virtually impossible (1 in 2^256) to get the 
            pre-image from this (using Sha-256). It's a slow proof to generate, but to keep you secure it must be processed on your end, so that
            we cannot see it. However, it is very easy to verify - which makes it ideal for use with blockchains. You must approve a MetaMask 
            transaction when it completes.
        </WhiteText>
        <LargeImage src={loading} alt="svg-loading" />
        <VerticalGap/>
    </BlackFullScreen>
  );
};

export default About;