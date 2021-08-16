import React from "react";
import "./ReviewDetails.css";

const ReviewDetails = (props) => {
  const { name, message, imageURL, address } = props.reviewItem;
  return (
    <>
      <div className="main-slider " data-aos="fade-up">
        <div className="comment-div">
          <p>{message}</p>
          <h5>{name}</h5>
          <span>{address}</span>
        </div>
        <div className="image-div">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
