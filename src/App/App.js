import React from "react";
import { Route, Routes } from "react-router";

import { PetOwner } from "./Pages/PetOwners";
import {Pets} from "./Pages/Pets";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PetOwner />} />
      <Route path="/Pets" element={<Pets />} />
    </Routes>
  );
};

export default App;
