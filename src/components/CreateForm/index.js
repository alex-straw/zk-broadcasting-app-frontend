import { Contract } from "ethers";
import poolFactoryAbi from '../../contracts/poolFactoryABI'
import React, {useState, useContext} from "react";
import { Button, LongerButton, Input, TextBox, EmailCard, LongInput, LongTextBox, LongTextBoxDetail, TinyInput, ProcessingBox} from "../../component-styles/generic-styles"
import { VerticalGap } from "../../component-styles/layout-styles";
import { UserContext } from "../../helpers/UserContext";

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
    const [broadcastThreshold, setBroadcastThreshold] = useState("1")
    const [processing, setProcessing] = useState(false)

    function handleClickAddEmail() {
        setIdCount(idCount +1);
        setPoolMembers(poolMembers.concat(memberEmail));
        setMemberEmail("");
    }


    async function paySetupFee(fee) {
        // We know their metamask is connected here
        const poolFactory = new Contract( 
            "0xb48996e69c4E8e454bc1EcD050bA8475500cd96e",
            poolFactoryAbi,
            userContext.signer
        )
        const options = {value: fee}
        try {
            const transaction = await poolFactory.paySetupFee(poolName, idCount, options)
            let receipt = await transaction.wait()

            // Once processed - call lambda to deploy the pool and send emails
            receipt.then(await awsLambdaCreatePool())

        } catch(err) {
            console.log(err)
            return false
        }
    }

    async function awsLambdaCreatePool() {
        /*
            idCount=2&poolName="awslambdapoolerdefe"&broadcastThreshold=1&m0="as17163@bristol.ac.uk"&m1="alexanderstraw01@hotmail.co.uk"
        */

        setProcessing(true);

        let queryStringCreatePool = process.env.REACT_APP_CREATE_POOL

        queryStringCreatePool += `?idCount=${idCount}`
        queryStringCreatePool += `&poolName=${poolName}`
        queryStringCreatePool += `&broadcastThreshold=${broadcastThreshold}`

        for (let i=0; i < idCount; i++) {
            queryStringCreatePool +=  `&m${i}=${poolMembers[i]}`
        }

        fetch(queryStringCreatePool, {mode: "no-cors"});
            
    }

    async function handleClickSubmit() {
        if (!userContext.address) {
            alert("Please connect your MetaMask first")
        } else {
            if (idCount < 1) {
                alert("Please add at least one email") 
            } else {
                if (broadcastThreshold > idCount || broadcastThreshold <= 0) {
                    alert(`Verification Threshold must be between 1 and ${idCount}`)
                } else {
                    try {
                        let poolFactory = new Contract( 
                            "0xb48996e69c4E8e454bc1EcD050bA8475500cd96e",
                            poolFactoryAbi,
                            userContext.signer
                        )
                

                        if (await poolFactory.poolNameInUse(poolName)==true) {
                            alert("Name already in use, please modify this and try again")
                        } else {
                            const response = await fetch(`${process.env.REACT_APP_ESTIMATE_GAS_API}?idCount=${idCount}`);
                
                            if (!response.ok) {
                            throw new Error(`Error! status: ${response.status}`);
                            }
                        
                            const result = await response.json();
                            await paySetupFee(parseInt(await result["gasCostEther"]));
                        }

                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        }
    }

    if (processing) {
        return(<div><ProcessingBox> We are processing your transaction. Passwords will be emailed shortly. </ProcessingBox></div>)
    } else {
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

                <LongTextBoxDetail>
                    Verification threshold (n) for pool to become operational
                </LongTextBoxDetail>

                <TinyInput
                    type="number"
                    placeholder="1"
                    name="broadcastThreshold"
                    onChange={(e) => setBroadcastThreshold(e.target.value)} 
                ></TinyInput>
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

                <VerticalGap/>

                <LongerButton onClick = {handleClickSubmit}> Submit </LongerButton>
            
            </div>
        )
    }
};

export default CreateForm;