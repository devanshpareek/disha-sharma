import React from "react";
import "./Footer.css"; // External CSS for styling
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/whatsappicon.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="quote">
          <p>"Your inspiring quote goes here."</p>
        </div>
        {/* <div className="work-links">
          <h3>Brands I have worked for:</h3>
          <ul>
            <li>
              <a
                href="https://link-to-project1.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sukoon
              </a>
            </li>
            <li>
              <a
                href="https://link-to-project2.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jewls By AS
              </a>
            </li>
            <li>
              <a
                href="https://link-to-project3.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Melange
              </a>
            </li>
            <li>
              <a
                href="https://link-to-project3.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TBH
              </a>
            </li>
          </ul>
        </div> */}
        <div className="social-media">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={navIcon1} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={navIcon3} alt="Instagram" />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={navIcon2} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
