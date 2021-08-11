import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookingCard.css";
const BookingCard = ({ booking , date}) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-lg-4  pt-4 mb-4">
      <div className="services img-customize">
        <div className="text-center">
          <img src={booking.img} alt="" />
        </div>
        <h3>{booking.name}</h3>
        <p>{booking.about}</p>
        <span>{booking.time}</span>
        <small>Your appointment is available in 10 slots </small>
        <div className="button">
          <button onClick={openModal}>Book Appointment</button>
          <AppointmentForm
            modalIsOpen={modalIsOpen}
            appointmentOn={booking.name}
            closeModal={closeModal}
            date={date}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
