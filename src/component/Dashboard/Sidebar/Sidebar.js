import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faBookDead,
  faCameraRetro,
  faComment,
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
            <Link to="/">Dashboard</Link>
          </li>

          <>
            <li>
              {" "}
              <span className="mr-3">
                <FontAwesomeIcon icon={faEdit} />{" "}
              </span>{" "}
              <Link to="/">Manage Order</Link>
            </li>
            <li>
              {" "}
              <span className="mr-3">
                <FontAwesomeIcon icon={faServicestack} />{" "}
              </span>{" "}
              <Link to="/inventory">Add Product</Link>
            </li>
            <li>
              {" "}
              <span className="mr-3">
                {" "}
                <FontAwesomeIcon icon={faUser} />{" "}
              </span>{" "}
              <Link to="/">Admin</Link>
            </li>

            <li>
              {" "}
              <span className="mr-3">
                {" "}
                <FontAwesomeIcon icon={faUserPlus} />{" "}
              </span>{" "}
              <Link to="/">Add Admin</Link>
            </li>
          </>

          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faBlog} />
            </span>{" "}
            <Link to="/">My Order</Link>
          </li>
          <li>
            {" "}
            <span className="mr-3">
              {" "}
              <FontAwesomeIcon icon={faBlog} />
            </span>{" "}
            <Link to="/">Blog</Link>
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
