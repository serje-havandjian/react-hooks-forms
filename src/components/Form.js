import React from "react";

function Form({firstName, lastName, handleChangeName, handleChangeLastName}) {



  return (
    <form>
      <input type="text" value={firstName} onChange={handleChangeName}/>
      <input type="text" value={lastName} onChange={handleChangeLastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
