import React from "react";
import { Link } from "react-router-dom";
import "./ContactTitle.css";

const ContactTitle = () => {
  return (
    <div className="py-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5">
            <div className="for-about-text-need-position">
              <div className="caption animate__animated animate__fadeInLeft">
                <h6>Contact Us </h6>
                <h1 className="text-large">
                  Feel free to contact us if you need any Assistance
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatibus consequatur sed deserunt deleniti excepturi nobis
                  ducimus ut aperiam, soluta culpa odio amet ? <br /> Id unde
                  recusandae consectetur.
                </p>
                <Link to="appointment">
                  <button>Get Appointment </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTitle;
