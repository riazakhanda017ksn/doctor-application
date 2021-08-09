import React from "react";
import "./ReviewDetails.css";

const ReviewDetails = (props) => {
  const { name, comment, image, address } = props.reviewItem;
  return (
    <>
      <div className="main-slider " data-aos="fade-up">
        <div className="comment-div">
          <p>{comment}</p>
          <h5>{name}</h5>
          <span>{address}</span>
        </div>
        <div className="image-div">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default ReviewDetails;
