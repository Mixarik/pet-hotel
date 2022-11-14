import React, { useEffect, useState } from "react";

import { getPetOwners } from "../services/PetOwners.service";

import { AddOwnerBar } from "../components/AddOwnerBar";
import { TableOwners } from "../components/TableOwner";
import { ModalAddOwner } from "../components/ModalAddOwner";

const PetOwner = () => {
  const [ownersData, setOwnersData] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getPetOwners().then(setOwnersData);
  }, []);

  const switchModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <div className="row">
        <h2>Pet Owners</h2>
      </div>

      {modal ? (
        <ModalAddOwner switchModal={switchModal} />
      ) : (
        <>
          <AddOwnerBar switchModal={switchModal} />
          <TableOwners petOwners={ownersData} />
        </>
      )}
    </>
  );
};
export default PetOwner;
