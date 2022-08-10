import React, {useState, useContext} from "react";
import { Button, Input, TextBox, EmailCard} from "../../component-styles/generic-styles"
import { UserContext } from "../../helpers/UserContext";

const emailCard = (item, index) => {
    return(
            <EmailCard key={index}> 
                {index}: {item}
            </EmailCard>
    )
}

const CreateForm = () => {

    const [memberEmail, setMemberEmail] = useState("email");
    const [idCount, setIdCount] = useState(0);
    const [poolMembers, setPoolMembers] = useState([]);
    const emailList = poolMembers.map((item, index) => emailCard(item, index+1));
    const userContext = useContext(UserContext);

    function handleClickAddEmail() {
        setIdCount(idCount +1);
        setPoolMembers(poolMembers.concat(memberEmail));
        setMemberEmail("");
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
                    alert(JSON.stringify(result));
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }


    return (
        <div>
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