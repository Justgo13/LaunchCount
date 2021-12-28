import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SpaceX from "./pages/CompanyPage/SpaceX";
import BlueOrigin from "./pages/CompanyPage/BlueOrigin";
import Nasa from "./pages/CompanyPage/Nasa";
import AddRocket from "./pages/rocket/AddRocket";
import EditRocket from "./pages/rocket/EditRocket";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/CompanyPage/SpaceX" element={<SpaceX />}></Route>
      <Route path="/CompanyPage/BlueOrigin" element={<BlueOrigin/>}></Route>
      <Route path="/CompanyPage/Nasa" element={<Nasa/>}></Route>
      <Route path="/rocket/AddRocket" element={<AddRocket/>}></Route>
      <Route path="/rocket/EditRocket/:companyName/:rocketId" element={<EditRocket/>}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
