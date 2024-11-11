import React from 'react';
import Image from 'next/image';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-section" id='about'>
      <div className="container">
        <div className="image-container">
          <Image
            src="/1.png"
            alt="About Us"
            className="about-image"
            width={500}
            height={500}
          />
        </div>
        <div className="text-content">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            I am a passionate team committed to delivering exceptional
            services. My journey began with a vision to provide high-quality
            products that meet the needs of our customers. I pride myself on
            integrity, innovation, and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
