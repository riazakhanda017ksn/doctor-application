import React from "react";
import imgOne from "../../Images/pexels-shvets-production-8413291.jpg";
import imgTwo from "../../Images/pexels-tima-miroshnichenko-8376318.jpg";
import imgThree from "../../Images/world-diabetes-day-doctor-holding-patient-hand-s.jpg";
import imgFour from "../../Images/silhouette-people-happy-time.jpg";
import imgFive from "../../Images/happy-doctor-holding-clipboard-with-patients.jpg";
import imgSix from "../../Images/medical-staff-discussing-treatment-with-disabled-senior-woman-carrying-walking-frame-hospital-waiting-room-wearing-face-mask-against-coronavirus.jpg";
import BlogDetails from "../BlogDetails/BlogDetails";

const Blog = () => {
  const blogs = [
    {
      name: "We are providing the corona vaccine",
      image: imgOne,
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa inventore exercitationem corrupti excepturi. Esse soluta minus quas veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?",
      url: "https://riazakhanda.medium.com/javascript-8c420bfef001",
    },
    {
      name: "We are providing the home treatment",
      image: imgTwo,
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa inventore exercitationem corrupti excepturi. Esse soluta minus quas veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?",
      url: "https://riazakhanda.medium.com/react-ee5b43176c4",
    },
    {
      name: "We have best Care & Better Doctor",
      image: imgThree,
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa inventore exercitationem corrupti excepturi. Esse soluta minus quas veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?",
      url: "https://riazakhanda.medium.com/react-ee5b43176c4",
    },
    {
      name: "Health is all we are concerned about.",
      image: imgFour,
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa inventore exercitationem corrupti excepturi. Esse soluta minus quas veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?",
      url: "https://riazakhanda.medium.com/primitive-values-e0f52327490e",
    },
    {
      name: "We are providing the best treatment.",
      image: imgFive,
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa inventore exercitationem corrupti excepturi. Esse soluta minus quas veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?",
      url: "https://riazakhanda.medium.com/primitive-values-e0f52327490e",
    },
    {
      name: "We are providing the Corona Treatment.",
      image: imgSix,
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa inventore exercitationem corrupti excepturi. Esse soluta minus quas veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?",
      url: "https://riazakhanda.medium.com/primitive-values-e0f52327490e",
    },
  ];

  return (
    <>
      <div className="review-caption">
        <h6>Doctor Portal's Blog</h6>
        <h1>
          Here Our <span className="color"> Awesome Blog</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          inventore exercitationem corrupti excepturi. Esse soluta minus quas
          veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?
        </p>
      </div>

      <div className="container mt-5">
        <div className="row">
          {blogs.map((blog) => (
            <BlogDetails blogItem={blog}></BlogDetails>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
