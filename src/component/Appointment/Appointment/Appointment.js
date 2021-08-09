import React from "react";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";

const Appointment = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AppoinmentBanner></AppoinmentBanner>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
