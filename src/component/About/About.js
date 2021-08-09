import React from "react";
import "./About.css";
import doctor from "../../Images/portrait-attractive-male-doctor.jpg";
const About = () => {
  return (
    <div className="container py-5 my-4 navbar" data-aos="fade-right">
      <div className="row mt-5 pt-5">
        <div className="col-lg-7">
          <div className="about-caption">
            <h3>About The Doctor Portal</h3>
            <h1>
              We’re lanced most{" "}
              <span className="color"> powerful treatment system</span>. They
              are making beautifully.
            </h1>
            <p>
              Every patient getting best care from us. again is there anyone who
              of itself, because it is pain, but because occasionally
              circumstance procure him some great pleasure.
            </p>
            <div className="caption need-border">
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="about-img">
            <img src={doctor} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
