import React, {useState} from "react";
import DisplayData from "./DisplayData";
import Form from "./Form"

function ParentComponent(){
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    function handleChangeName(e){
        setFirstName(e.target.value)
    }

    function handleChangeLastName(e){
        setLastName(e.target.value)
    }

    console.log(firstName)

    return(
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                handleChangeName={handleChangeName}
                handleChangeLastName={handleChangeLastName}
            />
            <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    )
}

export default ParentComponent