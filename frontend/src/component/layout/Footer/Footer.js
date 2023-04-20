import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import insta from "../../../images/instagram.png"
import linked from "../../../images/linkedin.png"
import github from "../../../images/github.png"
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>MI-DEAL</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Yujit Yadav</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/yujit2003"><img src={insta} />  Instagram</a>
        <a href="https://www.linkedin.com/in/yujit-yadav-7a6197225/"><img src = {linked } />  LinkedIn</a>
        <a href="https://github.com/yujit2003"><img src = {github } />  Git Hub</a>
      </div>
    </footer>
  );
};

export default Footer;
