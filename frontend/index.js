import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./src/pages/MainPage";
import SpaceX from "./src/pages/CompanyPage/SpaceX";
import BlueOrigin from "./src/pages/CompanyPage/Blue Origin";
import Nasa from "./src/pages/CompanyPage/Nasa";
import AddRocket from "./src/pages/rocket/AddRocket";
import EditRocket from "./src/pages/rocket/EditRocket";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/CompanyPage/SpaceX" element={<SpaceX />}></Route>
      <Route path="/CompanyPage/Blue Origin" element={<BlueOrigin/>}></Route>
      <Route path="/CompanyPage/Nasa" element={<Nasa/>}></Route>
      <Route path="/rocket/AddRocket" element={<AddRocket/>}></Route>
      <Route path="/rocket/EditRocket/:companyName/:rocketId" element={<EditRocket/>}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
