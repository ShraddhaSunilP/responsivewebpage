import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import HomeDetails from "./HomeDetails";
import Clients from "./Clients";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";

const AllRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/homedetails" element={<HomeDetails/>}></Route>
          <Route exact path="/Clients" element={<Clients />}></Route>
          <Route exact path="/services" element={<Services/>}></Route>
          <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
          <Route exact path="/Contacts" element={<Contacts/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AllRoutes
