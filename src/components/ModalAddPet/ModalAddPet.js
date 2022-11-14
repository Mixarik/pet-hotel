import React from "react";

import styles from "./ModalAddPet.module.scss";

const ModalAddPet = ({ switchModal }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => switchModal()}>go back</button>
      <button>Add</button>
    </div>
  );
};
export default ModalAddPet;
