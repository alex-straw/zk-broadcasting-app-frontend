import React, { useCallback, useState } from "react";
import { Button, Input, TextBox, EmailCard} from "../../component-styles/generic-styles"

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

    function handleClick() {
        setIdCount(idCount +1);
        setPoolMembers(poolMembers.concat(memberEmail));
        setMemberEmail("");
    }

    return (
        <div>
            <Button onClick = {handleClick}> Add Email </Button>  
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
        </div>
    );
};

export default CreateForm;