import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './DashboardNavbar.css'

const DashboardNavbar = () => {
  return (
    <div className="need-flex">
      <div className="div">
        <p></p>
      </div>
      <div className="cross">
        <Link to="/dashboard">
          {" "}
          <span>
            {" "}
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
