import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { UserContext } from "../../../App";
import DashboardNavbar from "../../Dashboard/DashboardNavbar/DashboardNavbar";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";

const DashboardCalender = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  useEffect(() => {
    fetch("http://localhost:5055/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [selectedDate]);

  return (
    <section>
      <div>
        <DashboardNavbar></DashboardNavbar>
      </div>
      <div className="container py-5 mt-2 ">
        <div className="row">
          <div className="col-lg-4">
            <h4 className="color p-2">Appointments</h4>
            <div className="calender-section text-center">
              <Calendar onChange={handleDateChange} value={new Date()} />
            </div>
          </div>
          <div className="col-lg-8">
            <h4 className="color p-2">
              Click on the date to check your appointment
            </h4>
            <div className="table-div">
              <table class="table table-borderless py-5">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Number</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {appointments.map((appointment) => (
                  <AppointmentByDate
                    appointmentItem={appointment}
                  ></AppointmentByDate>
                ))}
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardCalender;
