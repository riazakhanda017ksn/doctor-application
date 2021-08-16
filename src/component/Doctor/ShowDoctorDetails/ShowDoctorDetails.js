import React from "react";

const ShowDoctorDetails = (props) => {
  const { name, imageURL } = props.doctorsItem;
  return (
    <>
      <div className="main-slider " data-aos="fade-up">
        <div className="comment-div">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias error
            necessitatibus, saepe temporibus optio veniam molestiae, architecto
            porro dolorum illo incidunt iste ut inventore dolor, provident
            nulla?
          </p>
          <h5>{name}</h5>
        </div>
        <div className="image-div">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </>
  );
};

export default ShowDoctorDetails;
