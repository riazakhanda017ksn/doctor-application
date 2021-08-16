import React, { useState } from "react";
import DashboardNavbar from "../../component/Dashboard/DashboardNavbar/DashboardNavbar";
import axios from "axios";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import "./ReviewUpload.css";
import reviewVideo from "../../../src/video/review.mp4";

const ReviewUpload = () => {
  const [imageURL, setImageURL] = useState(null);
  //
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data, e) => {
    const eventData = {
      name: data.name,
      address: data.address,
      email: data.email,
      imageURL: imageURL,
      message: data.message,
    };
    console.log("eventData", eventData);
    fetch("https://mighty-savannah-93883.herokuapp.com/peopleReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((result) => {
      if (result) {
        swal(
          "Thanks for your feedback !",
          "Keep checking back with us",
          "success"
        );
      } else {
        swal("Something is wrong", "Please try again", "danger");
      }
    });
    e.preventDefault();
    e.target.reset();
    reset();
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "b9c36745cce260532e007ff3f6b9c0cd");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <DashboardNavbar></DashboardNavbar>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="add-doctor add-review">
              <h4 style={{ color: "#F73959", padding: "6px 0" }}>
                Share your feedback here
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Name*" />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email*"
                />
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="address*"
                />

                <div className="need-customization">
                  <input
                    onChange={handleImageUpload}
                    className="form-control"
                    type="file"
                  />
                </div>

                <textarea
                  name=""
                  id=""
                  {...register("message", { required: true })}
                  cols="30"
                  rows="4"
                  className="text-area"
                  placeholder="Message*"
                ></textarea>

                <button type="submit">Send Review</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="add-review-section-by-video">
              <video src={reviewVideo} muted loop autoPlay></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewUpload;
