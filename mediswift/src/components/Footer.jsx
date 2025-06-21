import React from 'react';
import './Footer.css';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2025 MediSwift. All rights reserved.</p>

      <div className="footer-social">
        <span>Follow Us: </span>

        <a href="https://www.linkedin.com/in/pushpendrasinh-pavar-77364b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>

        <a href="https://wa.me/919327234789" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
        </a>

        <a href="https://github.com/PushpendrasinhPavar" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
      </div>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
}

export default Footer;
