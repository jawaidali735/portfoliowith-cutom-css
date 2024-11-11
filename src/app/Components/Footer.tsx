import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 
import { FaArrowUp } from "react-icons/fa"; 
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-left">
        <p> ©CopyRight Reserved by Jawaid Ali</p>
      </div>

      
      <div className="footer-center">
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=100083658815943&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="www.instagram.com/nawab_javedali" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

     
      <div className="footer-right up-arrow">
        <a href="#top">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
