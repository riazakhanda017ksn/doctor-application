import React, { useEffect } from "react";
import Services from "../Services/Services";
import one from "../../Images/about-1-1.png";
import two from "../../Images/3871893.jpg";
import three from "../../Images/39517.jpg";
import "./Service.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Service = () => {
  const services = [
    {
      id: "1",
      name: "Fever",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: one,
    },
    {
      id: "1",
      name: "Headache",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: two,
    },
    {
      id: "1",
      name: "Pregnant Operation",
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit minima, quibusdam labore optio dicta dolorem, fugiat distinctio repellat ab ipsam eum",
      img: three,
    },
  ];
  ///

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, [0]);
  return (
    <div className="need-margin">
      <div className="container">
        <div className="class-for-any-caption mb-5">
          <h1>
            Here our services <span className="color">we provide</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            sapiente saepe debitis, commodi architecto eveniet quia dolores
            autem, sed nisi velit aperiam voluptates id enim maxime? Neque
            blanditiis excepturi sint?
          </p>
        </div>
        <div className="row" data-aos="fade-up">
          {services.map((service) => (
            <Services serviceItem={service}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
