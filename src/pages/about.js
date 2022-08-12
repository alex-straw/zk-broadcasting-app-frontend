import React from 'react';
import { Wrapper, WhiteTitle, BlackFullScreen } from "../component-styles/layout-styles"
import { LargeImage } from "../component-styles/layout-styles"
import loading from '../images/7S7P.gif'


const About = () => {
    return (
    <BlackFullScreen>
        <WhiteTitle>
            <pre>
                Generating Proof {"\n"} This could take up to 5 minutes
            </pre>
        </WhiteTitle>
        <LargeImage src={loading} alt="svg-loading" />
    </BlackFullScreen>
  );
};

export default About;