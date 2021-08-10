import React, { useState } from "react";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AppointmentWithCalender from "../AppointmentWithCalender/AppointmentWithCalender";
import "react-calendar/dist/Calendar.css";
import "./Appointment.css";
const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
  return (
    <div>
      <Navbar></Navbar>
      <AppoinmentBanner></AppoinmentBanner>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AppointmentWithCalender
        handleDateChange={handleDateChange}
      ></AppointmentWithCalender>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
