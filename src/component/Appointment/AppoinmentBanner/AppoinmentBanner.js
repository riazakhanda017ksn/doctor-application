import React from "react";
import videoOne from "../../../video/production ID_4487290.mp4";
import AppointmentText from "../AppointmentText/AppointmentText";
const AppoinmentBanner = () => {
  return (
    <>
      <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <div className="video-overly"></div>
        <div className="text container mt-5 animate__animated animate__fadeInLeft">
          <AppointmentText></AppointmentText>
        </div>
      </div>
    </>
  );
};

export default AppoinmentBanner;
