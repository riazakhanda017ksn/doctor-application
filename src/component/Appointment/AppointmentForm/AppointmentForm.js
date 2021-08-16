import React, { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import swal from "sweetalert";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
///root set-up
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  ///
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    const userData = {
      name: data.name,
      number: data.number,
      email: data.email,
      doctor: data.selectionDoctor,
      date: date,
      appointmentDate: data.appointmentDate,
      created: new Date(),
    };
    console.log("userData", userData);

    fetch("http://localhost:5055/addAppointment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          swal("Something is wrong", "Please try again", "danger");
        } else {
          closeModal();
          swal(
            "Thanks For your appointment !",
            "Keep checking back with us",
            "success"
          );
        }
      });
    e.preventDefault();
    e.target.reset();
    reset();
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4>
          Dear patient, your appointment is{" "}
          <span className="color">{appointmentOn}</span>
        </h4>

        <button onClick={closeModal} className="customization-button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <select class="form-select" {...register("selectionDoctor")}>
              <option>Open this select the doctors</option>
              <option>Doctor Marlo</option>
              <option>Doctor Alex</option>
              <option>Doctor Ema Watson</option>
              <option>Doctor Mobin Khan</option>
              <option>Doctor Sayem Khan</option>
            </select>
            <input {...register("name")} required placeholder="Name" />
            <input
              {...register("number", { required: true })}
              required
              placeholder="Number"
            />
            <input
              {...register("email", { required: true })}
              required
              placeholder="Email"
              value={loggedInUser.email}
            />
            <input
              {...register("appointmentDate", { required: true })}
              required
              value={date.toDateString()}
            />
            <div className="button-align">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
