import React from "react";
import { useState,useEffect } from "react";
import "../styles/Footer.css"; // Import the CSS file for styling

const Footer = () => {
  const [emailHref, setEmailHref] = useState("");

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobileMailLink = "mailto:collabkeys.official@gmail.com?subject=&body=";
    const desktopMailLink = "https://mail.google.com/mail/?view=cm&to=collabkeys.official@gmail.com&su=&body=";

    setEmailHref(isMobile ? mobileMailLink : desktopMailLink);
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <ul className="wrapper">
          <li className="icon email">
            <span className="tooltip">Email</span>
            <a href={emailHref} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className="icon whatsapp">
            <span className="tooltip">WhatsApp</span>
            <a href={emailHref}>
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <a href="https://www.instagram.com/saispurthi_official/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          {/* {<li className="icon github">
            <span className="tooltip">GitHub</span>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </li>} */}
          <li className="icon youtube">
            <span className="tooltip">YouTube</span>
            <a href="http://www.saispurthi.ac.in/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
        <p className="f2">
          <b>©️</b> 2025 CollabKeys Tech Club - <b>Sai Spurthi Institute of Technology</b>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
