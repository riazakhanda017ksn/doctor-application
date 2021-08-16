import {
  faComments,
  faHeadSideCough,
  faUserMd,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import "./DashboardActivities.css";
import dashboard from "../../../Images/12dashboard.gif";
import ActivitiesNavbar from "../ActivitiesNavbar/ActivitiesNavbar";
import { Link } from "react-router-dom";

const DashboardActivities = () => {
  const [patient, setPatient] = useState([]);
  const [doctor, setDoctors] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://mighty-savannah-93883.herokuapp.com/doctorsItem")
      .then((res) => res.json())
      .then((data) => setPatient(data));
  }, []);
  useEffect(() => {
    fetch("https://mighty-savannah-93883.herokuapp.com/doctorDb")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  useEffect(() => {
    fetch("https://mighty-savannah-93883.herokuapp.com/admins")
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);
  useEffect(() => {
    fetch("https://mighty-savannah-93883.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <>
      <div>
        <div className="dashboard-navbar">
          <Link to="/dashboardActivities">
            <DashboardNavbar></DashboardNavbar>
          </Link>
        </div>
        <div className="container mt-5 pt-5">
          <div className="row pt-5">
            <div className="col-lg-3">
              <div className="doctors">
                <span className="logo-customize">
                  <FontAwesomeIcon icon={faUserMd} />
                </span>
                {<h3> We have {doctor.length} doctors</h3>}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="patient">
                <span className="logo-customize">
                  <FontAwesomeIcon icon={faHeadSideCough} />
                </span>
                {<h3> There are {patient.length} patients here</h3>}
              </div>
            </div>

            <div className="col-lg-3">
              <div className="admin">
                <span className="logo-customize">
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                {<h3>We have {admin.length} admins</h3>}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="review">
                <span className="logo-customize need-color">
                  <FontAwesomeIcon icon={faComments} />
                </span>
                {<h3>{review.length} reviews are available </h3>}
              </div>
            </div>
          </div>
          {/* <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="activities-dashboard-img">
              <img src={dashboard} alt="" />
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default DashboardActivities;
