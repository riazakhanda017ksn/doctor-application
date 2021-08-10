import React from "react";
import "./BookingCard.css";
const BookingCard = ({ booking }) => {
  return (
    <div className="col-lg-4  pt-4 mb-4" data-aos="fade-up">
      <div className="services img-customize">
        <div className="text-center">
          <img src={booking.img} alt="" />
        </div>
        <h3>{booking.name}</h3>
        <p>{booking.about}</p>
        <span>{booking.time}</span>
        <small>Your appointment is available in 10 slots </small>
        <div className="button">
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
