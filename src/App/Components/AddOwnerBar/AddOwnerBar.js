import React from "react";

import { ADD_OWNER_BAR } from "./AddOwnerBar.constants";

const AddOwnerBar = ({switchModal}) => {
  return (
    <div className="row">
      <div className="d-flex">
        <button onClick={()=>switchModal()}>{ADD_OWNER_BAR.BUTTON} </button>
      </div>
    </div>
  );
};
export default AddOwnerBar;
