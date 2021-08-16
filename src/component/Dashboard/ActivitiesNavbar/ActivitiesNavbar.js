import {
  faComments,
  faHeadSideCough,
  faTimes,
  faUserMd,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ActivitiesNavbar.css";
const ActivitiesNavbar = () => {
  const [patient, setPatient] = useState([]);
  const [doctor, setDoctors] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5055/doctorsItem")
      .then((res) => res.json())
      .then((data) => setPatient(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5055/doctorDb")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5055/admins")
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5055/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky bg fixed-top">
      <div class="container-fluid px-5">
        <a class="navbar-brand" href="#">
          <a class="navbar-brand" href="#">
            <h3>
              {" "}
              <Link to="/active">Dashboard Activities</Link>
            </h3>
          </a>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-end-item" id="navbarNav">
          <ul class="navbar-nav ml-auto our-primary-menu new-customization ">
            <li>
              <Link to="/active">
                <FontAwesomeIcon icon={faUserMd} />{" "}
                <span className="length">{doctor.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/active">
                <FontAwesomeIcon icon={faHeadSideCough} />{" "}
                <span className="length">{patient.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/active">
                <FontAwesomeIcon icon={faUsers} />{" "}
                <span className="length">{admin.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/active">
                <FontAwesomeIcon icon={faComments} />{" "}
                <span className="length">{review.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faTimes} />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ActivitiesNavbar;
