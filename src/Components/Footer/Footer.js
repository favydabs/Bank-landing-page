import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="foot-item">
          <div className="foot-icon">
            <div className="f-logo">
              <img src="images/logo copy.svg" alt="logo" />
            </div>
            <div className="social-icon">
              <img src="images/icon-facebook.svg" alt="Facebook" />
              <img src="images/icon-instagram.svg" alt="Instagram"/>
              <img src="images/icon-twitter.svg" alt="Twitter" />
            </div>
          </div>
          <div className="foot">
            <a href="about.html">About Us</a>
            <a href="contact.html">Contact</a>
            <a href="blogs.html">Blogs</a>
          </div>
          <div className="foot">
            <a href="career.html">Careers</a>
            <a href="suport.html">Support</a>
            <a href="policy.html">Privacy Policy</a>
          </div>
        </div>
        <div className="foot-invite">
          <button className="foot-btn">Request Invite</button>
          <p>&copy; .EasyBank All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
