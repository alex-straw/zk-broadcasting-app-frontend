import React, { useState, useContext } from "react";
import { UserContext } from "../../helpers/UserContext"
import { ethers } from "ethers";
import { Button } from "../../component-styles/generic-styles";

const MetaMask = () => {
    const [buttonText, setButtonText] = useState("Connect to MetaMask");
    const userContext = useContext(UserContext);

    const changeText = (text) => {
        setButtonText(text);
    };

    const handleButtonClick = () => {
        connectWalletHandler();
        changeText("Connected");
    };

    const connectWalletHandler = () => {
        if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        userContext.setSigner(provider.getSigner());
        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((result) => {
            userContext.setAddress(result[0]);
            });
        } else {
        window.alert("Please install MetaMask");
        }
    };

    return (
        <Button onClick={handleButtonClick}>
            {buttonText}
        </Button>
    );
};

export default MetaMask;