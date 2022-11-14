import React from "react";

import styles from "./ModalAddOwner.module.scss";

const ModalAddOwner = ({ switchModal }) => {
  return (
    <div className={styles.wrapper}>
        <input type="text" placeholder="Pet Owner Name" />
        <input type="text" placeholder="Email Address" />
      <button onClick={() => switchModal()}>go back</button>
    </div>
  );
};
export default ModalAddOwner;

