import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Share/Navbar/Navbar";
import Review from "../Review/Review";
import Service from "../Service/Service";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Share/Footer/Footer";
import ShowDoctor from "../Doctor/ShowDoctor/ShowDoctor";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <About></About>
      <Review></Review>
      <Blog></Blog>
      <ShowDoctor></ShowDoctor>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
