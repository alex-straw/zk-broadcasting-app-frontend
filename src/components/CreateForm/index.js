import React, { useCallback, useState } from "react";


const CreateForm = () => {

    //let poolMembers = {}
    const [email, setEmail] = useState("email");
    const [idCount, setIdCount] = useState(0);
    const [poolMembers, setPoolMembers] = useState([]);

    function handleClick() {
        setIdCount(idCount +1);
        setPoolMembers(poolMembers.concat({'id': idCount, 'email': email}))
    }

    return (
        <div>
            <button onClick = {handleClick}> Add Email </button>  
            <input
                type="text"
                placeholder="example@gmail.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            
            {JSON.stringify(poolMembers)}
        </div>
    );
};

export default CreateForm;