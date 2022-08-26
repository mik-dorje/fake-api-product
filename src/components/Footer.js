import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import googleStore from "../images/image1.png";
import appStore from "../images/image2.png";

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="footer">
        <div className="footer-title customer">
          <h3 className="footer-item-title">CUSTOMER CARE</h3>
          <p>Amount</p>
          <p>My Orders</p>
          <p>Wishlist</p>
          <p>FAQs</p>
          <p>Support</p>
        </div>
        <div className="about">
          <h3 className="footer-item-title">ABOUT</h3>
          <p>Company info</p>
          <p>Interior Works</p>
        </div>
        <div className="users">
          <h3 className="footer-item-title">USERS POLICY</h3>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Data Policy</p>
          <p>Cookies Policy</p>
          <p>Refund Policy</p>
          <p>Return Policy</p>
        </div>

        <div className="connect">
          <h3 className="footer-item-title">CONNECT WITH US</h3>
          <div className="brand-icons">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 20, color: "#FF8804", marginRight: 15 }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: 20, color: "#FF8804", marginRight: 15 }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: 20, color: "#FF8804", marginRight: 15 }}
            />
            <FontAwesomeIcon
              icon={faGoogle}
              style={{ fontSize: 20, color: "#FF8804", marginRight: 15 }}
            />
          </div>
          <div className="store-image">
            <h3 className="footer-item-title">SOON ON:</h3>

            <img src={googleStore} alt="google"></img>
            <img src={appStore} alt="app"></img>
          </div>
        </div>

        <div className="stay">
          <h3 className="footer-item-title">STAY CONNECTED</h3>
          <p>
            <i class="fa fa-map-marker" style={{ marginRight: 10 }}></i>
            Baneshwor, Kathmandu, Nepal
          </p>
          <p>
            <i class="fa fa-user-plus" style={{ marginRight: 10 }}></i>
            +977-9100000000
          </p>
          <p>
            <i class="fa fa-envelope" style={{ marginRight: 10 }}></i>Wishlist
          </p>
        </div>
      </div>
      <div className="subscription">
        <p>Subscribe to get amazing offers</p>
        <input placeholder=" Enter your email"></input>
      </div>
    </div>
  );
};

export default Footer;
