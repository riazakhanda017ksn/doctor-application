import React from "react";
import one from "../../../Images/about-1-1.png";
import two from "../../../Images/3871893.jpg";
import three from "../../../Images/39517.jpg";
import Four from "../../../Images/5642597.jpg";
import Five from "../../../Images/6c9fd7a8cf6f1c35811758517e86bb76.gif";
import Six from "../../../Images/flat-dental-care-concept-illustration_23-2148982240.jpg";
import "./BookingAppointment.css";
import BookingCard from "../BookingCard/BookingCard";

const BookingAppointment = ({ date }) => {
  const BookingAppointment = [
    {
      id: "1",
      name: "Fever",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: one,
      time: "8:00 AM - 9:00 AM",
    },
    {
      id: "2",
      name: "Headache",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: two,
      time: "10:00 AM - 12:00 AM",
    },
    {
      id: "3",
      name: "Pregnant Operation",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: three,
      time: "01:00 AM - 2:00 AM",
    },
    {
      id: "4",
      name: "Stomach Pain",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: Four,
      time: "10:50 AM - 11:30 AM",
    },
    {
      id: "4",
      name: "Physical Weakness",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: Five,
      time: "5:00 PM - 6:00 PM",
    },
    {
      id: "4",
      name: "Teeth Orthodontics",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: Six,
      time: "7:00 AM - 8:30 AM",
    },
  ];
  return (
    <section className="mb-5">
      <div className="class-for-any-caption py-5 mt-3" data-aos="fade-left">
        <h1>
          Available Appointment on{" "}
          <span className="color">{date.toDateString()}</span>
        </h1>
      </div>
      <div className="container marginBottom">
        <div className="row">
          {BookingAppointment.map((booking) => (
            <BookingCard booking={booking}></BookingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingAppointment;
