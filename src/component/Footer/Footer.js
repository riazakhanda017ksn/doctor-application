import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const oralHealth = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
  ];
  const services = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
    { name: "Check Up", link: "/checkup" },
  ];
  return (
    <footer className="footer-background mt-5">
      <div className="container pt-5 ">
        <div className="row ">
          <div className="col-lg-3">
            <div className="first-footer-work mt-5">
              <div className="address-item">
                <h6>Name </h6>
              </div>

              <ul>
                {noNamed.map((nameOne) => (
                  <li>{nameOne.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="second-footer-work mt-5">
              <div className="address-item">
                <h6>Services</h6>
              </div>
              <ul>
                {services.map((service) => (
                  <li>{service.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="second-footer-work mt-5">
              <div className="address-item">
                <h6>Oral Health</h6>
              </div>
              <ul>
                {oralHealth.map((health) => (
                  <li>{health.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="second-footer-work mt-5">
              <div className="address-item">
                <h6>Our Address</h6>
              </div>
              <ul>
                {ourAddress.map((address) => (
                  <li>{address.name}</li>
                ))}
              </ul>
              <div className="social-media">
                <Link to="/facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link to="/google">
                  <FontAwesomeIcon icon={faGooglePlus} />
                </Link>
                <Link to="/twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
            </div>
            <div className="call-part mt-4 pt-1">
              <p>If need any help please get in touch</p>
              <a class="d-block" href="tel:+15143125678">
                <p>+15143125678</p>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center need-border-in-footer-section ">
            <p>
              all right are reserved by riaZ - ({new Date().getFullYear()}){" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
