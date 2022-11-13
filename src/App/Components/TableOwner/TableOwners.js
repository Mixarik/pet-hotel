import React from "react";

const TableOwners = ({ petOwners }) => {

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Email</th>
            <th scope="col">Pets</th>
          </tr>
        </thead>
        <tbody>
          {petOwners.map((owner,idx) => (
            <tr key={`petOwnersTable_${idx}`}>
              <th scope="row">{owner.id}</th>
              <td>{owner.name}</td>
              <td>{owner.emailAddress}</td>
              <td>{owner.petCount}</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableOwners;
