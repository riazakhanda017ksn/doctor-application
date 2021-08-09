import React from "react";
import video1 from "../../video/VivaCut_video_1628269707890_1080HD.mp4";
import BannerText from "../BannerText/BannerText";
import "./Banner.css";

const Banner = () => {
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

export default Banner;
