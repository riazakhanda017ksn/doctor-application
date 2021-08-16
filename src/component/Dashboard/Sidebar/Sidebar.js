import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faBookDead,
  faCalendar,
  faCameraRetro,
  faComment,
  faComments,
  faEdit,
  faHome,
  faShoppingCart,
  faSignOutAlt,
  faUser,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { faDashcube, faServicestack } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5055/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  return (
    <div className="side-bar">
      <span className="customize  position-relative">
        <div className="navbar-brand need-place">
          <span>
            {" "}
            <FontAwesomeIcon icon={faUserMd} />
          </span>
          <h3>Doctor Portal</h3>
        </div>
      </span>

      <div className="side-bar-list ">
        <ul>
          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faHome} />
            </span>{" "}
            <Link to="/">Home</Link>
          </li>

          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faDashcube} />
            </span>{" "}
            <Link to="/dashboardActivities">Dashboard</Link>
          </li>

          <>
            {isAdmin && (
              <>
                <li>
                  {" "}
                  <span className="mr-3">
                    <FontAwesomeIcon icon={faEdit} />{" "}
                  </span>{" "}
                  <Link to="/appointment_management">
                    Appointment Management
                  </Link>
                </li>

                <li>
                  {" "}
                  <span className="mr-3">
                    {" "}
                    <FontAwesomeIcon icon={faUser} />{" "}
                  </span>{" "}
                  <Link to="/admin">Admin</Link>
                </li>

                <li>
                  {" "}
                  <span className="mr-3">
                    {" "}
                    <FontAwesomeIcon icon={faUserPlus} />{" "}
                  </span>{" "}
                  <Link to="/add-admin">Add Admin</Link>
                </li>
                <li>
                  {" "}
                  <span className="mr-3">
                    {" "}
                    <FontAwesomeIcon icon={faUsers} />
                  </span>{" "}
                  <Link to="/add-doctor">Add Doctor</Link>
                </li>
              </>
            )}
          </>

          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faCalendar} />
            </span>{" "}
            <Link to="/myAppointment">Appointment</Link>
          </li>

          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faComments} />
            </span>{" "}
            <Link to="/review">Add Review</Link>
          </li>
          <li>
            {" "}
            <span className="mr-3">
              <FontAwesomeIcon icon={faSignOutAlt} />{" "}
            </span>{" "}
            <Link onClick={() => setLoggedInUser({})}>Log Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
