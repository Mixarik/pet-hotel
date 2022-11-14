import React, { useEffect, useState } from "react";

import { getPets } from "../services/Pets.service";

import { AddPetBar } from "../components/AddPetBar";
import { TablePets } from "../components/TablePets";
import { ModalAddPet } from "../components/ModalAddPet";

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
    <>
      <div className="row">
        <h2>Pets</h2>
      </div>

      {petModal ? (
        <ModalAddPet switchModal={switchModal} />
      ) : (
        <>
          <AddPetBar switchModal={switchModal} />
          <TablePets petsData={petsData} />
        </>
      )}
    </>
  );
};
export default Pets;
