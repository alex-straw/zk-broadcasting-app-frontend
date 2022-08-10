import { Contract, ethers, providers } from "ethers";
import React, {useState, useContext} from "react";
import { Button, Input, TextBox, EmailCard, LongInput, LongTextBox} from "../../component-styles/generic-styles"
import { VerticalGap } from "../../component-styles/layout-styles";
import { UserContext } from "../../helpers/UserContext";
import poolFactoryAbi from '../../contracts/poolFactoryABI'
import { wait } from "@testing-library/user-event/dist/utils";

const emailCard = (item, index) => {
    return(
            <EmailCard key={index}> 
                {index}: {item}
            </EmailCard>
    )
}

const CreateForm = () => {

    const [poolName, setPoolName] = useState("pool-name...")
    const [memberEmail, setMemberEmail] = useState("email...");
    const [idCount, setIdCount] = useState(0);
    const [poolMembers, setPoolMembers] = useState([]);
    const emailList = poolMembers.map((item, index) => emailCard(item, index+1));
    const userContext = useContext(UserContext);

    function handleClickAddEmail() {
        setIdCount(idCount +1);
        setPoolMembers(poolMembers.concat(memberEmail));
        setMemberEmail("");
    }

    async function paySetupFee(fee) {
        // We know their metamask is connected here
        const userProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const poolFactory = new Contract( 
            "0x4Cd7249632Df70A27324bd69725727a96Fc47729",
            poolFactoryAbi,
            userContext.signer
        )
        const options = {value: fee}
        try {
            const transaction = await poolFactory.paySetupFee(poolName, idCount, options)
            let reciept = await transaction.wait()
            reciept.then(alert("received receipt"))

        } catch(err) {
            console.log(err)
            return false
        }
    }

    async function handleClickSubmit() {
        if (!userContext.address) {
            alert("Please connect your MetaMask first")
        } else {
            if (idCount < 1) {
                alert("Please add at least one email")
            } else {
                try {
                    const response = await fetch(`${process.env.REACT_APP_ESTIMATE_GAS_API}?idCount=${idCount}`);
            
                    if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                    }
                
                    const result = await response.json();
                    await paySetupFee(parseInt(await result["gasCostEther"]));

                } catch (err) {
                    console.log(err);
                }
            }
        }
    }


    return (
        <div>
            <LongTextBox>
                Name
            </LongTextBox>

            <LongInput 
                type="text"
                placeholder="pool-name..."
                name="poolName"
                onChange={(e) => setPoolName(e.target.value)}
            ></LongInput>   

            <VerticalGap/>

            <Button onClick = {handleClickAddEmail}> Add Email </Button>  
            <Input 
                type="text"
                placeholder="example@gmail.com"
                name="email"
                onChange={(e) => setMemberEmail(e.target.value)}
            ></Input>   
            <TextBox>
                {idCount}
            </TextBox>
            {emailList}
            <Button onClick = {handleClickSubmit}> Submit </Button>
        </div>
    );
};

export default CreateForm;