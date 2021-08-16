import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ShowDoctorDetails from "../ShowDoctorDetails/ShowDoctorDetails";
const ShowDoctor = () => {
  const [showDoctors, setShowDoctors] = useState([]);
  useEffect(() => {
    fetch("https://mighty-savannah-93883.herokuapp.com/doctorDb")
      .then((res) => res.json())
      .then((data) => setShowDoctors(data));
  }, [0]);
  //
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    //
    <div className="py-5 my-4">
      <div className="review-caption ">
        <h6>Here Our Doctors</h6>
        <h1>
          Here Our Most <span className="color"> Talented Doctor </span>
        </h1>
        <p className="pt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          inventore exercitationem corrupti excepturi. Esse soluta minus quas
          veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <Slider {...settings}>
                {showDoctors.map((showDoctor) => (
                  <ShowDoctorDetails
                    doctorsItem={showDoctor}
                  ></ShowDoctorDetails>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDoctor;
