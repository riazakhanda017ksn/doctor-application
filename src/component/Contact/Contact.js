import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import contact from "../../Images/image_processing20200121-30622-g2g2.gif";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="review-caption mt-5 pt-4 mb-5">
        <h6>If you need</h6>
        <h1>
          Contact with<span className="color"> us </span>
        </h1>
        <p>
          I'd Love to hear from you. Whether you have a question or just want to
          say Hi, feel free to drop a message. I'll try my best to get back to
          you! exercitationem corrupti excepturi. Esse soluta minus quas veniam
          at sapiente
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-us" data-aos="fade-left">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="name*"
                  type="text"
                  {...register("name")}
                  required
                />
                <input
                  type="email"
                  placeholder="email*"
                  {...register("email", { required: true })}
                  required
                />

                <input
                  placeholder="subject*"
                  type="text"
                  {...register("subject", { required: true })}
                  required
                />
                <textarea
                  placeholder=" message*"
                  {...register("message", { required: true })}
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  required
                ></textarea>
                <button type="submit"> Send Message </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            <div className="contact-img">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
