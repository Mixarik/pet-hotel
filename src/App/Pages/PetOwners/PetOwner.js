import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { getOwners, postOwner } from "../../Services/Services";

import { AddOwnerBar } from "../../Components/AddOwnerBar";
import { TableOwners } from "../../Components/TableOwner";
import { ModalAddOwner } from "../../Components/ModalAddOwner";

import styles from "./PetOwner.module.scss";

const PetOwner = () => {
  const [ownersData, setOwnersData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getOwners().then(setOwnersData);
  }, []);


  const switchModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className="row">
          <h2>Pet Owners</h2>
        </div>

        {modal ? (
          <ModalAddOwner switchModal={switchModal} />
        ) : (
          <>
            <AddOwnerBar switchModal={switchModal} />
            <TableOwners petOwners={ownersData} />
            <Link to="/Pets">Pets</Link>
          </>
        )}
      </div>
    </div>
  );
};
export default PetOwner;
