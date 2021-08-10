import React from "react";
import Calendar from "react-calendar";
import appointment from "../../../Images/riaz.gif";

const AppointmentWithCalender = ({ handleDateChange }) => {
  return (
    <>
      <div className="review-caption mb-5 pb-5">
        <h6>Appointment</h6>
        <h1>
          Select The Date For Your{" "}
          <span className="color"> Own Appointment</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          inventore exercitationem corrupti excepturi. Esse soluta minus quas
          veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-up">
            <div className="calender mb-5 text-center">
              <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <div className="appointment-img">
              <img src={appointment} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentWithCalender;
