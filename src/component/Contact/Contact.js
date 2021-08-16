import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import emailjs from "emailjs-com";
import contact from "../../Images/image_processing20200121-30622-g2g2.gif";
import swal from "sweetalert";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_in1cinu",
        "template_beh3o3b",
        e.target,
        "user_GFZkak7lkFm9Ad6G3J8K1"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal(
            "Thanks for your message!",
            "Keep checking back with us",
            "success"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

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
              <form onSubmit={sendEmail}>
                <input
                  placeholder="name*"
                  type="text"
                  type="text"
                  name="user_name"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="email*"
                  required
                />

                <input
                  placeholder="number*"
                  type="number"
                  name="contact_number"
                  required
                />

                <textarea
                  placeholder=" message*"
                  textarea
                  name="message"
                  cols="30"
                  rows="4"
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
