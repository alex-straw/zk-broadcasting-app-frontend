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
        What's going on? A proving key (53MB) has been downloaded into your browser's memory. 
                Your computer is currently creating a proof that you possess the hashed version of your private pre-image/password.  
                This hashed version of your password is stored on the blockchain, and this proof allows the smart contract to verify
                that you have the pre-image for this hash without exposing it (because Ethereum transactions are public). The resulting proof is very easy to verify on-chain, which makes it ideal for use 
                with blockchains. You must approve a MetaMask transaction when it completes. This pool will become operational after a certain 
                threshold of its users verify their membership. Storing your hash publicly on-chain is secure because it is virtually impossible (1 in 2^256)
                to find its pre-image (Sha-256), and to keep your pre-image secure all processing is performed on your end.
        </WhiteText>
        <LargeImage src={loading} alt="svg-loading" />
        <VerticalGap/>
    </BlackFullScreen>
  );
};

export default About;