import React from "react";
import Footer from "../../Share/Footer/Footer";
import AboutBanner from "../AboutBanner/AboutBanner";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import AboutMainText from "../AboutMainText/AboutMainText";

const AboutDefiner = () => {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <AboutBanner></AboutBanner>
      <AboutMainText></AboutMainText>
      <Footer></Footer>
    </>
  );
};

export default AboutDefiner;
