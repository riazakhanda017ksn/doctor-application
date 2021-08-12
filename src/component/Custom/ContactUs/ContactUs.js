import React from "react";
import ContactTitle from "../ContactTitle.js/ContactTitle";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className="contact-bg-one">
            <ContactTitle></ContactTitle>
          </div>
        </div>
        <div class="carousel-item">
          <div className="contact-bg-two">
            <ContactTitle></ContactTitle>
          </div>
        </div>
        <div class="carousel-item">
          <div className="contact-bg-three">
            <ContactTitle></ContactTitle>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ContactUs;
