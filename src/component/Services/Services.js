import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = (props) => {
  const { name, about, img } = props.serviceItem;
  return (
    <div className="col-lg-4 my-4">
      <div className="services ">
        <div className="text-center">
          <img src={img} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{about}</p>
        <div className="button">
          <Link to="/appointment">
            <button>Get Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
