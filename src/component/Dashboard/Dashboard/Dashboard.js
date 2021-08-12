import React from "react";

import "./Dashboard.css";
import dashboardVideo from "../../../video/production ID_4339994.mp4";
const Dashboard = () => {
  return (
    <div className="video-section-dashboard">
      <video src={dashboardVideo} muted loop autoPlay></video>
      <div className="video-overly-of-dashboard"></div>
      <div className="dashboard-text container mt-t"></div>
    </div>
  );
};

export default Dashboard;
