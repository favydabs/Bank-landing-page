import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="contain">
        <div className="intro-text">
          <h1>NEXT GENERATION DIGITAL BANKING</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="intro-btn">Request Invite</button>
        </div>

        <div className="intro-img">
        <img src="images/image-mockups.jpg" alt="Phone" />
            {/* <img src="images/image-mockups1.jpeg" alt="Phone" /> */}
            
        </div>
      </div>
    </section>
  );
};

export default Intro;
