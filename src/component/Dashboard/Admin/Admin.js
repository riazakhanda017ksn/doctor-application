import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import addAdmin from "../../../Images/admin.gif";

const Admin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data, e) => {
    const adminData = {
      name: data.name,
      email: data.email,
      address: data.address,
      number: data.number,
      country: data.country,
    };
    fetch("http://localhost:5055/addAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(adminData),
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
  return (
    <>
      <div>
        <DashboardNavbar></DashboardNavbar>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5">
            <div className="add-doctor add-review ">
              <h4 style={{ color: "#F73959", padding: "6px 0" }}>
                Add a new administrator to the website
              </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Name*" />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email*"
                />
                <input
                  {...register("number", { required: true })}
                  type="number"
                  placeholder="number*"
                />
                <input
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="address*"
                />
                <input
                  {...register("country", { required: true })}
                  type="text"
                  placeholder="country*"
                />

                <button type="submit" className="mt-4">
                  Add Admin
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 pt-5 mt-3">
            <div className="add-review-section-by-video">
              <img src={addAdmin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
