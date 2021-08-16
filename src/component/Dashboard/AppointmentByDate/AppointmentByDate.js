import React from "react";
import "./AppointmentByDate.css";

const AppointmentByDate = (props) => {
  const { name, number, status } = props.appointmentItem;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{number}</td>
        <td className="color text-bold">{status}</td>
      </tr>
    </>
  );
};

export default AppointmentByDate;
