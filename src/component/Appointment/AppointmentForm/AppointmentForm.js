import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
            />
            <input
              {...register("date", { required: true })}
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
