import React from "react";
import "../styles/services.css";
import { FaCode, FaLaptopCode, FaMobileAlt, FaTools, FaSearch } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
       
          <div className="service-item">
            <FaCode className="service-icon" />
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              We build responsive, scalable, and high-performance websites that meet your business needs.
            </p>
          </div>

     
          <div className="service-item">
            <FaLaptopCode className="service-icon" />
            <h3 className="service-title">App Development</h3>
            <p className="service-description">
              Our mobile applications are crafted to deliver seamless user experiences on both iOS and Android.
            </p>
          </div>

       
          <div className="service-item">
            <FaMobileAlt className="service-icon" />
            <h3 className="service-title">Mobile Development</h3>
            <p className="service-description">
              We offer custom mobile development to create apps that cater to your target audience’s needs.
            </p>
          </div>

      
          <div className="service-item">
            <FaTools className="service-icon" />
            <h3 className="service-title">Product Design</h3>
            <p className="service-description">
              We design intuitive, user-centric products to enhance the user experience and ensure satisfaction.
            </p>
          </div>

          <div className="service-item">
            <FaSearch className="service-icon" />
            <h3 className="service-title">SEO Optimization</h3>
            <p className="service-description">
              We help you enhance your website’s visibility and rankings on search engines to drive organic traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
