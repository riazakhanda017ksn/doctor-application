import React from "react";
import CustomNavbar from "../../Custom/CustomNavbar/CustomNavbar";
import ContactUs from "../ContactUs/ContactUs";
import Contact from "../../Contact/Contact";
import Footer from "../../Share/Footer/Footer";

const ContactSection = () => {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <ContactUs></ContactUs>
      <div className="py-5">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactSection;
