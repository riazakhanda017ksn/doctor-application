import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Review from "../Review/Review";
import Service from "../Service/Service";
import { MotionAnimate } from "react-motion-animate";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <About></About>
      <Review></Review>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
