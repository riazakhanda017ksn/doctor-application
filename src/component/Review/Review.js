import React, { useEffect, useState } from "react";
import "./Review.css";
// import urlOne from "../../Images/man.png";
// import urlTwo from "../../Images/company2.png";
// import urlThree from "../../Images/banner1.png";
// import urlFour from "../../Images/call-back-request.png";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
const Review = () => {
  // const reviews = [
  //   {
  //     name: "Zarif C. Cowen",
  //     address: "Dhaka, Bangladesh",
  //     comment:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quam aliquid, earum quia animi porro repellendus, quo est vero nihil quaerat eum! Tempore nihil, perspiciatis non eaque eum dolor repellendus harum amet voluptas unde? Voluptates vel error sapiente hic repudiandae. earum quia animi porro repellendus, quo est vero nihil quaerat eum! Tempore nihil, perspiciatis non eaque eum dolor repellendus harum amet voluptas unde?",
  //     image: urlOne,
  //   },
  //   {
  //     name: "Debra C. Cowen",
  //     address: "America",
  //     comment:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quam aliquid, earum quia animi porro repellendus, quo est vero nihil quaerat eum! Tempore nihil, perspiciatis non eaque eum dolor repellendus harum amet voluptas unde? Voluptates vel error sapiente hic repudiandae. earum quia animi porro repellendus, quo est vero nihil quaerat eum! Tempore nihil, perspiciatis non eaque eum dolor repellendus harum amet voluptas unde?",
  //     image: urlTwo,
  //   },
  //   {
  //     name: "Mr.John",
  //     address: "Japan",
  //     comment:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quam aliquid, earum quia animi porro repellendus, quo est vero nihil quaerat eum! Tempore nihil, perspiciatis non eaque eum dolor repellendus harum amet voluptas unde? Voluptates vel error sapiente hic repudiandae. earum quia animi porro repellendus, quo est vero nihil quaerat eum! Tempore nihil, perspiciatis non eaque eum dolor repellendus harum amet voluptas unde?",
  //     image: urlThree,
  //   },
  //   {
  //     name: "John's Group",
  //     address: "Andurora",
  //     comment:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae quam aliquid, earum quia animi porro repellendus, quo est vero nihil quaerat eum! Tempore nihil, perspiciatis non eaque eum dolor repellendus harum amet voluptas unde? Voluptates vel error sapiente hic repudiandae. earum quia animi porro repellendus, quo est vero nihil quaerat eum! Tempore nihil, perspiciatis non eaque eum dolor repellendus harum amet voluptas unde?",
  //     image: urlFour,
  //   },
  // ];

  ///
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  ///
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5 my-5">
      <div className="review-caption">
        <h6>Clients words</h6>
        <h1>
          What our <span className="color">clients say</span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          inventore exercitationem corrupti excepturi. Esse soluta minus quas
          veniam at sapiente dicta aspernatur facilis molestias! Ratione, nemo?
        </p>
      </div>
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewDetails reviewItem={review}></ReviewDetails>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
