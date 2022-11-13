import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPets } from "../../Services/Services";
import { AddPetBar } from "../../Components/AddPetBar";
import { TablePets } from "../../Components/TablePets";
import { ModalAddPet } from "../../Components/ModalAddPet";

import styles from "./Pets.module.scss";

const Pets = () => {
  const [petModal, setPetModal] = useState(false);
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    getPets().then(setPetsData);
  }, []);

  const switchModal = () => {
    setPetModal((prev) => !prev);
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className="row">
          <h2>Pets</h2>
        </div>

        {petModal ? (
          <ModalAddPet switchModal={switchModal}/>
        ) : (
          <>
            <AddPetBar switchModal={switchModal} />
            <TablePets petsData={petsData} />
            <Link to="/">Owners</Link>
          </>
        )}

        <Link to="/">PetOwners</Link>
      </div>
    </div>
  );
};
export default Pets;
