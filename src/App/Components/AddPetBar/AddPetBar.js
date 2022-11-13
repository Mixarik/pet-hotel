import React from "react";

import { ADD_PET_BAR } from "./AddPetBar.constants";

const AddPetBar = ({switchModal}) => {
  return (
    <div className="row">
      <div className="d-flex">
        <button onClick={()=>switchModal()}>{ADD_PET_BAR.BUTTON} </button>
      </div>
    </div>
  );
};
export default AddPetBar;
