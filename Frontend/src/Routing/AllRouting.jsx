import React from "react";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Registration from "../component/registration";
import Home from "../component/Home";
import Navbar from "../component/Navbar"
import Facilities from "../component/Facilities";
import Appointment from "../component/Appointment";
import AddAppointment from "../component/AddAppointment";
import DeleteAppointment from "../component/DeleteAppointment";
import AllAppointment from "../component/AllAppointment";
const AllRouting = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element ={<Registration/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Facilities" element={<Facilities/>} />
        <Route path="/Appointment" element={<Appointment/>} />
        <Route path="/AddAppointment" element={<AddAppointment/>} />
        <Route path="/DeleteAppointment" element={<DeleteAppointment/>} />
        <Route path="/AllAppointment" element={<AllAppointment/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default AllRouting