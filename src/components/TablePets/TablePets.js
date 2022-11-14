import React from "react";

const TablePets = ({ petsData }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Breed</th>
            <th scope="col">Color</th>
            <th scope="col">Checked In</th>
            <th scope="col">Pet Owner</th>
          </tr>
        </thead>
        <tbody>
          {petsData.map((pet, idx) => (
            <tr key={`petTable_${idx}`}>
              <th scope="row">{pet.name}</th>
              <td>{pet.breed}</td>
              <td>{pet.color}</td>
              <td>{pet.checkedInAt}</td>
              <td>{pet.petOwner.name}</td>
              <td>Checked in</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TablePets;
