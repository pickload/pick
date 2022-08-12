import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import profileimage from "../images/profileimage.png";
import "../css/navsignedin.css";
import { Link } from "react-router-dom";
import Pickload from "../../components/Images/pickload.png";

const Navsignedin = () => {
  return (
    <nav className="agent-nav">
      <div className="nav-wrapper">
        <div id="pick-div">
          <Link to="/">
            <img src={Pickload} alt="" />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <Link to="/">Home</Link>
            <li>
              <Link to="/aboutUS2"> About Us </Link>
            </li>
            <li>
              <Link to="/contactUS2"> Contact Us </Link>
            </li>
            <li className="hover-me">
              My Account <FontAwesomeIcon icon={faAngleDown} />
              <div className="sub-menu">
                <ul>
                  <li>Pending deliveries</li>
                  <li>Delivery history</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="profile">
          <div className="profile-img">
            <img src={profileimage} alt="" />
          </div>
          <div className="notification">
            <FontAwesomeIcon icon={faBell} className="notification-bell" />
            <span>3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navsignedin;
