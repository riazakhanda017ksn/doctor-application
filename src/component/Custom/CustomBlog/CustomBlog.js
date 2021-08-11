import React from "react";
import Navbar from "../../Share/Navbar/Navbar";
import AboutBanner from "../../Custom/AboutBanner/AboutBanner";
import Blog from "../../Blog/Blog";
import Footer from "../../Share/Footer/Footer";

const CustomBlog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutBanner></AboutBanner>
      <div className="mt-5 pt-3">
        <Blog></Blog>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CustomBlog;
