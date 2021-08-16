import React, { useState } from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import axios from "axios";
import { useForm } from "react-hook-form";
import img from "../../../Images/addDoctor.jpg";
import "./AddDoctor.css";
import upload from "../../../Images/—Pngtree—vector cloud upload icon_3778044.png";
import swal from "sweetalert";

const AddDoctor = () => {
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
      category: data.category,
      email: data.email,
      imageURL: imageURL,
    };
    console.log("eventData", eventData);
    fetch("https://mighty-savannah-93883.herokuapp.com/addDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((result) => {
      if (result) {
        swal("Congress !", "You have addded a new doctor", "success");
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
            <div className="add-doctor">
              <h4 style={{ color: "#F73959", padding: "6px 0" }}>
                Add Doctor Here
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Name*" />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email*"
                />
                <input
                  {...register("category", { required: true })}
                  type="text"
                  placeholder="category*"
                />
                <div className="need-customization">
                  <input
                    onChange={handleImageUpload}
                    className="form-control"
                    type="file"
                  />
                </div>

                <button type="submit">Add Doctor</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="add-doctor-section">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
