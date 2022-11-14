import React from "react";
import { Route, Routes } from "react-router";

import { Layout } from "../Layout";
import Pets from "../../pages/Pets";
import PetOwner from "../../pages/PetOwner";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="pets" element={<Pets />} />
        <Route path="pet-owners" element={<PetOwner />} />
      </Route>
    </Routes>
  );
};

export default App;
