import React from "react";
import swal from "sweetalert";
import "./ShowAdminDetails.css";

const ShowAdminDetails = (props) => {
  const { name, email, _id } = props.adminItems;

  const deleteEvent = (id) => {
    fetch(`http://localhost:5055/deleteAdmin/${id}`, {
      method: "DELETE",
    }).then((result) => {
      if (result) {
        swal(
          "Admin has been removed !",
          "Keep checking back with us",
          "success"
        );
      } else {
        swal("Something is wrong", "Please try again", "danger");
      }
    });
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td className="customize" onClick={() => deleteEvent(_id)}>
          Delete
        </td>
      </tr>
    </>
  );
};

export default ShowAdminDetails;
