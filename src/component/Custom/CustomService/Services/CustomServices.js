import React from "react";
import AboutBanner from "../../AboutBanner/AboutBanner";
import CustomNavbar from "../../CustomNavbar/CustomNavbar";
import Footer from "../../../Share/Footer/Footer";
import ServiceItem from "../ServiceItem/ServiceItem";

const CustomServices = () => {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <AboutBanner></AboutBanner>
      <ServiceItem></ServiceItem>
      <Footer></Footer>
    </>
  );
};

export default CustomServices;
