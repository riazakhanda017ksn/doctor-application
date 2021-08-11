import React from "react";
import "./AboutText.css";
import about from "../../../Images/slider-1.png";

const AboutText = () => {
  return (
    <div className="pt-5">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="for-about-text-need-position">
                    <div className="caption animate__animated animate__fadeInLeft">
                      <h6>Welcome to our Doctor Portal </h6>
                      <h1>Health is all we are concerned about.</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus consequatur sed deserunt deleniti
                        excepturi nobis ducimus ut aperiam, soluta culpa odio
                        amet ? <br /> Id unde recusandae consectetur.
                      </p>
                      <button>Get Appointment </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="bannerImg">
                    <img src={about} alt="" />
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default AboutText;
