import React from "react";

const AppoinmentBanner = () => {
  return (
    <>
      <div className="video-section">
        <video src={video1} muted loop autoPlay></video>
        <div className="video-overly"></div>
        <div className="text container mt-5 animate__animated animate__fadeInLeft">
          <BannerText></BannerText>
        </div>
      </div>
    </>
  );
};

export default AppoinmentBanner;
