import React from "react";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AppoinmentManagementDetails.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AppoinmentManagementDetails = (props) => {
  const { name, email, status, _id } = props.patients;
  //
  const updateStatus = (value, id) => {
    fetch(`http://localhost:5055/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ value }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal(
            "Status Has been Done !",
            "Keep checking back with us",
            "success"
          );
        } else {
          swal("Something is wrong", "Please try again", "danger");
        }
      });
  };

  /////delete appointment

  const deleteAppointment = (id) => {
    fetch(`http://localhost:5055/deleteAppointment/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        swal(
          "Appointment has been deleted!",
          "Keep checking back with us",
          "success"
        );
      } else {
        swal("Something is wrong", "Please try again", "danger");
      }
    });
  };

  return (
    //
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <ul class="navbar-nav ml-auto menubar">
          <li>
            <a>
              Action <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <ul>
              {status !== "not viewed yet" && (
                <li
                  onClick={() => updateStatus("Not viewed yet", _id)}
                  className="text-danger"
                >
                  Not Viewed Yet
                </li>
              )}
              {status !== "viewed" && (
                <li
                  onClick={() => updateStatus("viewed", _id)}
                  className="text-info"
                >
                  Viewed
                </li>
              )}
              <li className="color" onClick={() => deleteAppointment(_id)}>
                {" "}
                Delete
              </li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default AppoinmentManagementDetails;
